import conexion from "../config/Database.js";

export const getVisitasGuiadas = async(req,res)=>{
    try {
        const [response]= await conexion.query("SELECT VG.IdVisitaGuiada, VG.Nombre, VG.FechaYHora, I.Nombre as NombreIdioma FROM VisitasGuiadas VG LEFT OUTER JOIN Idiomasporvisitasguiadas IPVG ON IPVG.IdVisitaGuiada = VG.IdVisitaGuiada LEFT OUTER JOIN idiomas I ON IPVG.IdIdioma = I.IdIdioma");
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}

export const getIdVisitasGuiadas = async(req,res)=>{
    try {
        const [response]= await conexion.query("SELECT * FROM visitasguiadas WHERE IdVisitaGuiada = (SELECT MAX(IdVisitaGuiada) FROM visitasguiadas)");
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}




export const getVisitasGuiadasPorIdioma = async(req, res) =>{
    try  {
        const [response] = await conexion.query("SELECT VG.IdVisitaGuiada, VG.Nombre, VG.FechaYHora FROM VisitasGuiadas VG LEFT OUTER JOIN Idiomasporvisitasguiadas IPVG ON IPVG.IdVisitaGuiada = VG.IdVisitaGuiada WHERE IPVG.IdIdioma = (?)",
        {
            replacements: [req.params.IdIdioma],
        });
        res.status(200).json(response);
        console.log(JSON.stringify(response, null, 1))
    } catch (error) {
        console.log(error.message);
    }
}

export const crearVisitaGuiada = async(req, res) =>{
    try {
        await conexion.query("INSERT INTO `VisitasGuiadas` (Nombre, FechaYHora) VALUES (?,?)",
        {
           replacements: [[req.body.Nombre], [req.body.FechaYHora]],
        });
        res.status(201).json({msg: "VisitaGuiada Creada"});
    } catch (error) {
        console.log(error.message);
    }
}