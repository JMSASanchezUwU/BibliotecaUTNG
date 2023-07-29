const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});

const conectarDB =  async () =>{
    try {
        await mongoose.connect(process.env.DB_Mongo,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            //useFindAndModify: false
        });
        console.log("Se ha conectado exitosamente a la Base de datos");
    } catch (error) {
        console.log(error);
        process.exit(1); //Detenemos la App
    }
}
module.exports = conectarDB;