const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    contrasena: {
        type: String
    }
}, {
    collection: 'Usuario' // especificar el nombre de la colección
});

module.exports = mongoose.model('Usuario', usuarioSchema);
