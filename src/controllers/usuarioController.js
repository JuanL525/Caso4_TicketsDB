import Usuario from "../models/Usuario.js";

const agregarUsuario = async(req,res) =>{
    const {email}=req.body;

    const existeUsuario = await Usuario.findOne({email});
    if(existeUsuario){
        const error = new Error('El usuario ya existe');
        return res.status(400).json({msg:error.message});
    }

    try{
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.json({msg: 'Usuario creado correctamente', ...usuario._doc});
    } catch(error){
        console.log(error);
        return res.status(500).json({msg:'Error al registrar al usuario'});
    }
};

const autenticarUsuario = async(req,res) =>{
    const {email, password} = req.body;
    const usuario= await Usuario.findOne({email});

    if(!usuario){
        const error= new Error('El usuario no existe');
        return res.status(404).json({msg:error.message})
    }

    if(await usuario.comprobarPassword(password)){
        return res.json({
            _id:usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email:usuario.email,
        })
    }
    const error = new Error('Password incorrecto');
    return res.status(403).json({msg:error.message});
}

export {
    agregarUsuario,
    autenticarUsuario
}