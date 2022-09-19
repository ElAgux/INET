import conexion from "../config/Database.js";
export const getIdiomas = async(req,res)=>{
    try {
        const [response]= await conexion.query("SELECT * FROM `idiomas`");
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))
    } catch (error) {
        console.log(error.message);
    }
}