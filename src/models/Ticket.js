import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
    codigo:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    descripcion:{
        type:String,
        default:null,
        trim:true
    },

    id_tecnico:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tecnico',
        required:true
    },

    id_cliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cliente',
        required:true
    }
},{
    timestamps:true
});

const Ticket = mongoose.model('Ticket', ticketSchema);
export default Ticket;