import conexion from "../config/Database.js";

export const getAreas = async(req,res)=>{
    try {
        const [response]= await conexion.query("SELECT A.IdArea, A.Nombre, A.Descripcion, A.Estado, TA.Nombre as NombreTipoArea FROM areas A LEFT OUTER JOIN tiposareas TA ON A.IdTipoArea = TA.IdTipoArea");
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}

export const editarArea = async(req, res) =>{
    try {
        await conexion.query("UPDATE `areas` SET `Nombre`=(?), `Descripcion`=(?), `IdTipoArea`=(?) WHERE `IdArea`=(?)",{  
            replacements: [[req.body.Nombre],[req.body.Descripcion],[req.body.IdTipoArea],[req.params.IdArea]],
        });
        res.status(200).json({msg: "Area editada"});
    } catch (error) {
        console.log(error.message);
    }
}

export const crearArea = async(req, res) =>{
    try {
        await conexion.query("INSERT INTO `areas` (Nombre, Descripcion, IdTipoArea) VALUES (?,?,?)",
        {
           replacements: [[req.body.Nombre], [req.body.Descripcion], [req.body.IdTipoArea]],
        });
        res.status(201).json({msg: "Area Creada"});
    } catch (error) {
        console.log(error.message);
    }
}

    export const getAreaById = async(req, res) =>{
    try {
        const [response]= await conexion.query("SELECT * FROM `areas` WHERE `IdArea`=(?)",
        {
            replacements: [req.params.IdArea],
        });
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}

export const cambiarEstadoArea = async(req, res) =>{
    try {

        const IdArea = req.params.IdArea;
        let estado=0;
        try {

            const [response]= await conexion.query("SELECT `Estado` FROM `areas` WHERE `IdArea`=(?)",
            {
                replacements:[IdArea],
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
        await conexion.query("UPDATE `areas` SET `Estado`=(?) WHERE `IdArea`=(?)",{
            replacements:[[estado],[IdArea]],
        })
        res.status(200).json({msg: "Estado Cambiado"});
    } catch (error) {
        console.log(error.message);
    }
}
