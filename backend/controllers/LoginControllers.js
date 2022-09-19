import conexion from "../config/Database.js";

export const LoginCon = async(req, res) => {

    try {
        let usuario = req.body.userLog;
        let pass = req.body.passLog;
        console.log("Nombre de usuario: " + usuario);
        console.log("Password: " + pass);
        //
        const [results] = await conexion.query ("SELECT * FROM `usuarios` WHERE `NombreUsuario` = (?) AND `PassUsuario` = (?)", {
            replacements: [req.body.userLog, req.body.passLog],
        });

        if(results.length > 0){
            console.log('LOGEADO')
            res.status(200).send({
                "ID Usuario": results[0].IdUsuario,
                "Nombre_de_Usuario": results[0].NombreUsuario,
                "Password_de_Usuario": results[0].PassUsuario
                
            });
            console.log(JSON.stringify(results, null, 1));
        }else{
            res.status(400).send('USUARIO NO ENCONTRADO');
            console.log('USUARIO NO ENCONTRADO');
        }


    } catch (error) {
        res.status(500).send(error);
        console.log(error.message);
    }

    

}