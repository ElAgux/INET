import conexion from "../config/Database.js";

export const crearVisitante = async(req, res) =>{
    try {
        await conexion.query("INSERT INTO `Visitantes` (Nombre, Apellido, Email, Telefono, Documento, IdVisitaGuiada) VALUES (?,?,?,?,?,?)",
        {
           replacements: [[req.body.NombreVisitante],[req.body.Apellido],[req.body.Email],[req.body.Telefono],[req.body.Documento],[req.body.IdVisitaGuiada]],
        });
        res.status(201).json({msg: "visitante Creado"});
    } catch (error) {
        console.log(error.message);
    }
}