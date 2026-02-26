import express from 'express';

import {
    agregarCliente,
    verClientes,
    verCliente,
    actualizarCliente,
    eliminarCliente
} from '../controllers/clienteController.js'

const router = express.Router();

router
    .route("/")
    .post(agregarCliente)
    .get(verClientes)

router
    .route("/:id")
    .get(verCliente)
    .put(actualizarCliente)
    .delete(eliminarCliente)

export default router;