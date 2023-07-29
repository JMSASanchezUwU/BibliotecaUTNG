const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//api rutas
router.post('/',usuarioController.crearUsuario);
router.post('/login', usuarioController.login);
router.get('/:id',  usuarioController.obtenerUsuario);


module.exports = router;