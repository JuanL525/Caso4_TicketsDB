import mongoose from "mongoose";

const tecnicoSchema = mongoose.Schema({
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

    cedula:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    fecha_nacimiento:{
        type:Date,
        trim:true
    },

    genero:{
        type:String,
        trim:true
    },

    ciudad:{
        type:String,
        trim:true
    },

    direccion:{
        type:String,
        trim:true
    },

    telefono:{
        type:String,
        trim:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }
},
{
    timestamps: true
});

const Tecnico = mongoose.model('Tecnico', tecnicoSchema);
export default Tecnico;