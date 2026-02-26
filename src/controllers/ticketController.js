import Ticket from '../models/Ticket.js'

const agregarTicket = async(req,res) => {
    const {codigo} = req.params;

    const existeTicket = await Ticket.findOne({codigo});
    if(existeTicket){
        const error = new Error('Ticket ya existente')
        return res.status(400).json({msg: error.message});
    }
    try{
        const ticket = new Ticket(req.body);
        await ticket.save();
        res.json({msg: 'Ticket generado exitosamente', ...ticket._doc});
    } catch(error){
        console.log(error);
        res.status(500).json({msg: 'Error al registrar ticket'})
    }
};

const verTickets = async(req,res) => {
    try{
        const tickets = await Ticket.find()
            .populate('id_tecnico', 'nombre apellido cedula email')
            .populate('id_cliente', 'cedula nombre apellido email dependencia');
        res.json(tickets);
    } catch(error){
        console.log(error);
        res.status(500).json({msg:'Error al ver los tickets'});
    }
};

const verTicket = async(req,res) => {
    const {id} = req.params;
    try{
        const ticket= await Ticket.findById(id)
            .populate('id_tecnico', 'nombre apellido cedula email')
            .populate('id_cliente', 'cedula nombre apellido email dependencia');

        if(!ticket){
            return res.status(404).json({msg: 'Ticket inexistente'})
        }
        res.json(ticket);
    } catch(error){
        console.log(error);
        res.status(500).json({msg:'ID no valido o no encontrado'})
    }
    
}

const actualizarTicket = async(req,res) => {
    const{id} = req.params;
    const ticket = await Ticket.findById(id);

    if(!ticket){
        return res.status(404).json({msg: 'El ticket buscado no existe'});
    }

    if(req.body.codigo && req.body.codigo !== ticket.codigo){
        const existeCodigo= await Ticket.findOne({codigo: req.body.codigo});
        if(existeCodigo){
            return res.status(400).json({msg: 'Ese codigo ya está en uso'});
        }
    }

    ticket.codigo = req.body.codigo || ticket.codigo;
    ticket.descripcion = req.body.descripcion || ticket.descripcion;
    ticket.id_tecnico = req.body.id_tecnico || ticket.id_tecnico;
    ticket.id_cliente = req.body.id_cliente || ticket.id_cliente;

    try{
        const ticketActualizado = await ticket.save();
        res.json(ticketActualizado);
    } catch(error){
        console.log(error);
        res.status(500).json({msg: 'Error al actualizar el ticket'});
    }
}

const eliminarTicket = async(req,res) => {
    const{id} = req.params;

    try{
        const ticket =await Ticket.findById(id);
        if(!ticket){
            return res.status(404).json({msg: 'El ticket no existe'})
        }
        await ticket.deleteOne();
        res.json({msg: 'Ticket eliminado correctamente'});
    } catch(error){
        console.log(error);
        res.status(500).json({msg:'Error al eliminar ticket'});
    }
}

export{
    agregarTicket,
    verTicket,
    verTickets,
    actualizarTicket,
    eliminarTicket
}