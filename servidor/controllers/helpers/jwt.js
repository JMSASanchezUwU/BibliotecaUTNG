const jwt = require('jsonwebtoken');
require('dotenv').config({path:'variables.env'});

const generarJWT = (_id, nomUsuario) =>{
    return new Promise((resolve, reject)=>{
        const payload={_id, nomUsuario};

        jwt.sign(payload, process.env.SECRET_JWT, {
            expiresIn: '20m'
        },(err,token)=>{
            if(err){
                console.log(err);
                reject ('No se pudo generar el token');
            }
            resolve(token);
        })
    })
}

module.exports={
    generarJWT
}