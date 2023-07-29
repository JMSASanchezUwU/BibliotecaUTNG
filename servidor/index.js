const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");


//Se crear el servidor
const app = express();

//Conectamos a la base de datos
conectarDB();
app.use(cors());
app.use(express.json());


const usuarioRoutes = require('./routes/usuario');
app.use('/api/Usuario', usuarioRoutes);

const libroRoutes = require('./routes/libro');
app.use('/api/Libro', libroRoutes);

app.listen(4000, () =>{
    console.log('El servidor esta corriendo perfextamente!!!');
})