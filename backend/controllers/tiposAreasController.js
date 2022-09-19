import conexion from "../config/Database.js";

export const getTiposAreas = async(req,res)=>{
    try {
        const [response]= await conexion.query("SELECT * FROM `tiposareas`");
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}

export const editarTipoArea = async(req, res) =>{
    try {
        await conexion.query("UPDATE `tiposareas` SET `Nombre`=(?),`Descripcion`=(?) WHERE `IdTipoArea`=(?)",{  
            replacements: [[req.body.Nombre],[req.body.Descripcion],[req.params.IdTipoArea]],
        });
        res.status(200).json({msg: "TipoArea editada"});
    } catch (error) {
        console.log(error.message);
    }
}

    export const getTipoAreaById = async(req, res) =>{
    try {
        const [response]= await conexion.query("SELECT * FROM `tiposareas` WHERE `IdTipoArea`=(?)",
        {
            replacements: [req.params.IdTipoArea],
        });
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}

export const crearTipoArea = async(req, res) =>{
    try {
        await conexion.query("INSERT INTO `tiposareas` (Nombre, Descripcion) VALUES (?,?)",
        {
           replacements: [[req.body.Nombre], [req.body.Descripcion]],
        });
        res.status(201).json({msg: "TipoObra Creada"});
    } catch (error) {
        console.log(error.message);
    }
}


export const cambiarEstadoTipoArea = async(req, res) =>{
    try {

        const IdTipoArea = req.params.IdTipoArea;
        let estado=0;
        try {

            const [response]= await conexion.query("SELECT `Estado` FROM `tiposareas` WHERE `IdTipoArea`=(?)",
            {
                replacements:[IdTipoArea],
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
        await conexion.query("UPDATE `tiposareas` SET `Estado`=(?) WHERE `IdTipoArea`=(?)",{
            replacements:[[estado],[IdTipoArea]],
        })
        res.status(200).json({msg: "Estado Cambiado"});
    } catch (error) {
        console.log(error.message);
    }
}
