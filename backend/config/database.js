import {Sequelize} from "sequelize";

const conexion = new Sequelize('sql10520925','sql10520925','Nxq2zVyFlE',{
    host: 'sql10.freemysqlhosting.net',
    dialect: 'mysql'
});

export default conexion;