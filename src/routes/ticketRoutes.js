import express from 'express';

import {
    agregarTicket,
    verTicket,
    verTickets,
    actualizarTicket,
    eliminarTicket
} from '../controllers/ticketController.js';

const router = express.Router();

router
    .route("/")
    .post(agregarTicket)
    .get(verTickets)

router
    .route("/:id")
    .get(verTicket)
    .put(actualizarTicket)
    .delete(eliminarTicket)

export default router;