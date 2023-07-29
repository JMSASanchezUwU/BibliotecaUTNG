const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombreAutor: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    categoria: {
        type: Number,
        required: true
    },
    anioPublicacion: {
        type: String,
        required: true
    },
    disponibilidad: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
}, {
    collection: 'Libro' // especificar el nombre de la colección
});

module.exports = mongoose.model('Libro', usuarioSchema);