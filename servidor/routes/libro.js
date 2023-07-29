const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');
const usuarioController = require('../controllers/usuarioController');

//api rutas
router.post('/',usuarioController.verifyToken, libroController.crearLibro);
router.get('/',usuarioController.verifyToken ,libroController.obtenerLibros);
router.get('/:id',usuarioController.verifyToken, libroController.obtenerLibro);
router.delete('/:id',usuarioController.verifyToken, libroController.eliminarLibro);
router.put('/:id',usuarioController.verifyToken, libroController.actualizarLibro);



module.exports = router;