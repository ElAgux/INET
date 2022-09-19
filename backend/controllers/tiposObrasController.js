import conexion from "../config/Database.js";

export const getTiposObras = async(req,res)=>{
    try {
        const [response]= await conexion.query("SELECT * FROM `tiposobras`");
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}

export const editarTipoObra = async(req, res) =>{
    try {
        await conexion.query("UPDATE `tiposobras` SET `Nombre`=(?),`Descripcion`=(?) WHERE `IdTipoObra`=(?)",{  
            replacements: [[req.body.Nombre],[req.body.Descripcion],[req.params.IdTipoObra]],
        });
        res.status(200).json({msg: "TipoObra editada"});
    } catch (error) {
        console.log(error.message);
    }
}

export const getTipoObraById = async(req, res) =>{
    try {
        const [response]= await conexion.query("SELECT * FROM `tiposobras` WHERE `IdTipoObra`=(?)",
        {
            replacements: [req.params.IdTipoObra],
        });
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}

export const crearTipoObra = async(req, res) =>{
    try {
        await conexion.query("INSERT INTO `areas` (Nombre, Descripcion) VALUES (?,?)",
        {
           replacements: [[req.body.Nombre], [req.body.Descripcion]],
        });
        res.status(201).json({msg: "TipoObra Creada"});
    } catch (error) {
        console.log(error.message);
    }
}

export const cambiarEstadoTipoObra = async(req, res) =>{
    try {

        const IdTipoObra = req.params.IdTipoObra;
        let estado=0;
        try {

            const [response]= await conexion.query("SELECT `Estado` FROM `tiposobras` WHERE `IdTipoObra`=(?)",
            {
                replacements:[IdTipoObra],
            });

            console.log(JSON.stringify(response, null, 1))
            estado= response[0].Estado;
            console.log(estado);
            if(estado == 0){
                estado = 1;
            } else {
                estado = 0;
            }
        } catch (error) {
            console.log(error.message);
        }
        //
        await conexion.query("UPDATE `tiposobras` SET `Estado`=(?) WHERE `IdTipoObra`=(?)",{
            replacements:[[estado],[IdTipoObra]],
        })
        res.status(200).json({msg: "Estado Cambiado"});
    } catch (error) {
        console.log(error.message);
    }
}
