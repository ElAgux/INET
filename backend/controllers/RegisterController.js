import conexion from "../config/Database.js";

export const LoginYreg = async(req, res) => {
    try {
        await conexion.query ("INSERT INTO `usuarios` (nombreUsuario, passUsuario) VALUE (?,?)",{
            replacements: [req.body.usernameReg, req.body.passwordReg],
        })
        res.status(201).json({msg: "Creado."});
    } catch (error) {
        console.log(error.message);
    }
}