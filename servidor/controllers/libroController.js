const Libro = require("../models/Libro");

exports.crearLibro = async (req, res) => {
    try {
      let libro;
      
      //Se crea el libro
      libro = new Libro(req.body);
 
  
      await libro.save();
  
      res.send(libro);
  
    } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error!!! :(');
    }
  }

  exports.obtenerLibros = async (req, res) => {

    try {
      const libros = await Libro.find();
      res.json(libros);
  
    } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error!!! :(');
    }
  }

  exports.obtenerLibro = async (req, res) => {
    try {
      // Buscamos el libro en la base de datos por su ID
      const libro = await Libro.findById(req.params.id);
  
      // Si no se encuentra el libro, retornamos un error 404
      if (!libro) {
        return res.status(404).json({ msg: "El libro no existe" });
      }
      // Retornamos el libro actualizado como respuesta
      res.json(libro);
  
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error!!! :(");
    }
  };

  exports.eliminarLibro = async (req, res) => {
    try {
      // Buscamos al usuario en la base de datos por su ID
      const libro = await Libro.findById(req.params.id);
  
      // Si no se encuentra el usuario, retornamos un error 404
      if (!libro) {
        return res.status(404).json({ msg: "El usuario no existe" });
      }
      await Libro.findByIdAndRemove({ _id: req.params.id });
      res.json({ msg: 'Usuario Eliminado' });
  
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error!!! :(");
    }
  };

  exports.actualizarLibro = async (req, res) => {
    try {
      // Extraemos las propiedades del usuario que se van a actualizar desde la solicitud
      const { nombreAutor, titulo, editorial, categoria, anioPublicacion, disponibilidad, img } = req.body;
  
      // Buscamos al usuario en la base de datos por su ID
      const libro = await Libro.findById(req.params.id);
  
      // Si no se encuentra el usuario, retornamos un error 404
      if (!libro) {
        return res.status(404).json({ msg: "El usuario no existe" });
      }
  
      // Actualizamos las propiedades del usuario con los valores recibidos en la solicitud
      libro.nombreAutor = nombreAutor;
      libro.titulo = titulo;
      libro.editorial = editorial;
      libro.categoria = categoria;
      libro.anioPublicacion = anioPublicacion;
      libro.disponibilidad = disponibilidad;
      libro.img= img;
      //usuario.contrasena = contrasena;
  
      // Guardamos los cambios en la base de datos
      await libro.save();
  
      // Retornamos el usuario actualizado como respuesta
      res.json(libro);
  
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error!!! :(");
    }
  };
  
  
  
  
