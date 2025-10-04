const express = require('express');
const router = express.Router();

// Lista temporal de órdenes
let ordenes = [];

// GET: obtener todas las órdenes
router.get('/', (req, res) => {
    res.json(ordenes);
});

// POST: agregar una orden
router.post('/', (req, res) => {
    const { idActivo, tipo, descripcion, fecha } = req.body;
    const nuevaOrden = { id: ordenes.length + 1, idActivo, tipo, descripcion, fecha };
    ordenes.push(nuevaOrden);
    res.status(201).json(nuevaOrden);
});

module.exports = router;
