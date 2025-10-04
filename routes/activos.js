const express = require('express');
const router = express.Router();

// Lista temporal de activos
let activos = [];

// GET: obtener todos los activos
router.get('/', (req, res) => {
    res.json(activos);
});

// POST: agregar un activo
router.post('/', (req, res) => {
    const { nombre, tipo, ubicacion } = req.body;
    const nuevoActivo = { id: activos.length + 1, nombre, tipo, ubicacion };
    activos.push(nuevoActivo);
    res.status(201).json(nuevoActivo);
});

module.exports = router;
