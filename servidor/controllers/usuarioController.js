const Usuario = require("../models/Usuario");
const bcrypt = require('bcrypt');
const {generarJWT}= require('../controllers/helpers/jwt');
const jwt = require('jsonwebtoken');

//Método para guardar el usuario en la base de datos
exports.crearUsuario = async (req, res) => {
  try {
    let usuario;
    
     // Encriptar la contraseña utilizando MD5
     //const contrasenaEncriptada = CryptoJS.MD5(req.body.contrasena).toString();
    //Se crea el usuario
    usuario = new Usuario(req.body);
    contrasena=req.body.contrasena;
    const salt = bcrypt.genSaltSync();
    usuario.contrasena = bcrypt.hashSync( contrasena, salt );

    await usuario.save();

    res.send(usuario);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error!!! :(');
  }
}


// Definimos el método para obtener un usuario
exports.obtenerUsuario = async (req, res) => {
  try {
    // Buscamos al usuario en la base de datos por su ID
    const usuario = await Usuario.findById(req.params.id);

    // Si no se encuentra el usuario, retornamos un error 404
    if (!usuario) {
      return res.status(404).json({ msg: "El usuario no existe" });
    }
    // Retornamos el usuario actualizado como respuesta
    res.json(usuario);

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error!!! :(");
  }
};


//Método con el que se logue el usuario
exports.login=async (req, res) => {

  const {email, contrasena}= req.body;
   try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok:false,
        msg: 'El email no existe'
      });
    }

    // Confirmar si el password hace match
    const validPassword = bcrypt.compareSync( contrasena, usuario.contrasena );

     if (!validPassword) {
       return res.status(400).json({
        ok:false,
        msg:"Contraseña incorrecta"
      });
     }

     //Generar JWT
     const token = await generarJWT(usuario._id, usuario.nomUsuario);

     res.json({
      ok:true,
      _id:usuario._id,
      rol:usuario.rol,
      token
     });
    

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok:false,
      msg: 'Hubo un problema',
      error
    });
  }
}

//Método que verifica si el token existe o se ha caducado
exports.verifyToken = function(req, res, next) {
  // Verificar si el token JWT está presente en la solicitud
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ auth: false, message: 'Token no proporcionado.' });
  }

  // Verificar la validez del token JWT
  jwt.verify(token, process.env.SECRET_JWT, function(err, decoded) {
    if (err) {
      return res.status(500).json({ auth: false, message: 'Error al autenticar el token.' });
    }

    // Si el token JWT es válido, almacenar el nombre de usuario en la solicitud para su posterior uso
    req.nomUsuario = decoded.nomUsuario;
    next();
  });
};