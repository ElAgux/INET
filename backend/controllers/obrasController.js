import conexion from "../config/Database.js";

export const getObras = async(req, res) =>{
    try {
        const [response] = await conexion.query("SELECT O.IdObra, O.Autor, O.Descripcion, O.Nombre, O.Estado, T.Nombre as NombreObra, A.Nombre as NombreArea FROM obras O LEFT OUTER JOIN tiposobras T ON O.IdTipoObra = T.IdTipoObra LEFT OUTER JOIN areas A ON  O.IdArea = A.IdArea;")
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}

export const getObraById = async(req, res) =>{
    try  {
        const [response] = await conexion.query("SELECT * FROM obras WHERE `obras`.`IdObra` = (?)",
        {
            replacements: [req.params.IdObra],
        });
        res.status(200).json(response);
        console.log(JSON.stringify(response, null, 1))
    } catch (error) {
        console.log(error.message);
    }
}

export const editarObra = async(req, res) =>{
    try {
        await conexion.query("UPDATE `obras` SET `Autor` = (?),  `Descripcion`= (?),`Nombre`= (?), `IdTipoObra`= (?),`IdArea`= (?) WHERE `obras`.`IdObra` = (?)"
        ,{
        replacements: [[req.body.Autor], [req.body.Descripcion], [req.body.Nombre], [req.body.IdTipoObra], [req.body.IdArea], [req.params.IdObra]],
       
        });
        res.status(200).json({msg: "Obra Editada"});
    } catch (error) {
        console.log(error.message);
    }
}

export const crearObra = async(req, res) =>{
    try {
        await conexion.query("INSERT INTO `obras` (Autor, Descripcion, Nombre, IdTipoObra, IdArea) VALUES (?,?,?,?,?)",
        {
           replacements: [[req.body.Autor], [req.body.Descripcion], [req.body.Nombre], [req.body.IdTipoObra], [req.body.IdArea], [req.params.IdObra]],
        });
        res.status(201).json({msg: "Obra Creada"});
    } catch (error) {
        console.log(error.message);
    }
}

export const cambiarEstadoObra = async(req, res) =>{
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
        await conexion.query("UPDATE `tiposobras` SET `Estado`=(?) WHERE `IdTipoArea`=(?)",{
            replacements:[[estado],[IdTipoArea]],
        })
        res.status(200).json({msg: "Estado Cambiado"});
    } catch (error) {
        console.log(error.message);
    }
}

