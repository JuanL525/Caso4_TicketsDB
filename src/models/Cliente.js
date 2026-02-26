import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
    cedula:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    nombre:{
        type:String,
        required:true,
        trim:true
    },

    apellido:{
        type:String,
        required:true,
        trim:true
    },

    ciudad:{
        type:String,
        trim:true,
        default:null
    },

    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    direccion:{
        type:String,
        trim:true,
        default:null
    },

    telefono:{
        type:String,
        default:null,
        trim:true
    },

    fecha_nacimiento:{
        type:Date,
        default:null
    },

    dependencia:{
        type:String,
        default:null,
        trim:true
    }
},
{
    timestamps:true
});

const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;