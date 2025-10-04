const express = require('express');
const router = express.Router();

// Lista de usuarios temporal (en memoria)
let usuarios = [];

// GET: obtener todos los usuarios
router.get('/', (req, res) => {
    res.json(usuarios);
});

// POST: agregar un usuario
router.post('/', (req, res) => {
    const { nombre, rol } = req.body; // obtenemos datos enviados en JSON
    const nuevoUsuario = { id: usuarios.length + 1, nombre, rol };
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

module.exports = router;
