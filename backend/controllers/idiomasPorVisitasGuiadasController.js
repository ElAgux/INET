import conexion from "../config/Database.js";

export const crearIdiomaPorVisitaGuiada = async(req, res) =>{
    try {
        await conexion.query("INSERT INTO `idiomasporvisitasguiadas` (IdIdioma,IdVisitaGuiada) VALUES (?,?)",
        {
           replacements: [[req.body.IdIdioma],[req.body.IdVisitaGuiada]],
        });
        res.status(201).json({msg: "VisitaGuiada Creada"});
    } catch (error) {
        console.log(error.message);
    }
}