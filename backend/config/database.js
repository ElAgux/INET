import {Sequelize} from "sequelize";

const conexion = new Sequelize('museoinet','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default conexion;