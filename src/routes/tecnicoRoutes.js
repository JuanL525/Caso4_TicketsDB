import express from "express";

import {
    agregarTecnico,
    verTecnicos,
    verTecnico,
    actualizarTecnico,
    eliminarTecnico
} from '../controllers/tenicoController.js';

const router = express.Router();

router
    .route("/")
    .post(agregarTecnico)
    .get(verTecnicos)

router
    .route("/:id")
    .get(verTecnico)
    .put(actualizarTecnico)
    .delete(eliminarTecnico)

export default router;