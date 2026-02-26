import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import cors from 'cors';

import usuarioRoutes from './routes/usuarioRoutes.js';
import clienteRoutes from './routes/clienteRouter.js';
import tecnicoRoutes from './routes/tecnicoRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';


dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
    credentials: false
}));

app.use(express.json());

conectarDB();

app.get('/', (req, res) => {
    res.send('Bienvenido a la API del Sistema de Soporte Técnico y Tickets');
});

//Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/tecnicos', tecnicoRoutes);
app.use('/api/tickets', ticketRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});