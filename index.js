const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Importar Rutas
const usuariosRoutes = require('./routes/usuarios');

// Usar rutas
app.use('/usuarios', usuariosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor de mantenimiento funcionando!');
});


const activosRoutes = require('./routes/activos');
app.use('/activos', activosRoutes);

const ordenesRoutes = require('./routes/ordenes');
app.use('/ordenes', ordenesRoutes);


// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
