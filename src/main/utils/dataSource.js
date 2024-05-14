import {Sequelize} from "sequelize";
import mariadb from 'mariadb';
import dotenv from 'dotenv'
import {taiexService} from "../service/taiexApiService.js";
import {StockDay} from "../entitys/StockDay.js";

dotenv.config()
const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbHost = process.env.DB_HOST
export const sequelize = new Sequelize(dbName,dbUser,dbPass,{
    host:dbHost,
    dialect:"mariadb",
    logging:console.log,
    dialectModule: mariadb
})

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection Successfully");
    })
    .catch((e) => {
        console.error("Connection Fail", e);
    });


