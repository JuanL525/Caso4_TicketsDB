import Tecnico from "../models/Tecnico.js";

const agregarTecnico = async(req,res) =>{
    const {cedula} = req.body;
    const existeTecnico = await Tecnico.findOne({cedula});

    if(existeTecnico){
        const error = new Error('Ese tecnico ya existe');
        return res.status(400).json({msg:error.message});
    }
    
    try{
        const tecnico = new Tecnico(req.body);
        await tecnico.save();
        res.json({msg: 'Tecnico registrado correctamente', ...tecnico._doc});
    } catch(error){
        console.log(error);
        res.status(500).json({msg: 'Error al registrar al tecnico'});
    }
}

const verTecnicos = async(req,res) => {
    try{
        const tecnicos = await Tecnico.find();
        res.json(tecnicos);
    } catch(error){
        console.log(error);
        res.status(500).json({msg:'Huno un error al obtener los tecnicos'});
    }
}

const verTecnico = async(req,res) => {
    const {id} = req.params;
    try{
        const tecnico = await Tecnico.findById(id);
        if(!tecnico){
            return res.status(404).json({msg:'El tecnico a buscar no existe'});
        }
        res.json(tecnico);
    } catch(error){
        console.log(error);
        res.status(500).json({msg: 'ID no valido o no encontrado'});
    }
}

const actualizarTecnico = async(req,res) => {
    const {id} = req.params;
    const tecnico = await Tecnico.findById(id);

    if(!tecnico){
        return res.status(404).json({msg:'Tecnico no encontrado'});
    }

    if(req.body.cedula && req.body.cedula !== tecnico.cedula){
        const existecedula = await Tecnico.findOne({cedula: req.body.cedula});
        if(existecedula){
            return res.status(400).json({msg: 'Esa cedula pertenece a otro tecnico'});
        }
    }

    tecnico.nombre = req.body.nombre || tecnico.nombre;
    tecnico.apellido = req.body.apellido || tecnico.apellido;
    tecnico.cedula = req.body.cedula || tecnico.cedula;
    tecnico.fecha_nacimiento = req.body.fecha_nacimiento || tecnico.fecha_nacimiento;
    tecnico.genero = req.body.genero || tecnico.genero;
    tecnico.ciudad = req.body.ciudad || tecnico.ciudad;
    tecnico.direccion = req.body.direccion || tecnico.direccion;
    tecnico.telefono = req.body.telefono || tecnico.telefono;
    tecnico.email = req.body.email || tecnico.email;

    try{
        const tecnicoAlmacenado = await tecnico.save();
        res.json(tecnicoAlmacenado);
    } catch(error){
        console.log(error);
        res.status(500).json({msg: 'Error al actualizar tecnico'});
    }
};

const eliminarTecnico = async(req,res) => {
    const {id} = req.params;
    
    try{
        const tecnico = await Tecnico.findById(id);
        if(!tecnico){
            return res.status(404).json({msg: 'No existe ese tecnico'});
        }
        await tecnico.deleteOne();
        res.json({msg: 'Tecnico eliminado con exito'});
    } catch(error){
        console.log(error);
        res.status(500).json({msg: 'Error al eliminar al tecnico'})
    }
}

export {
    agregarTecnico,
    verTecnicos,
    verTecnico,
    actualizarTecnico,
    eliminarTecnico
}