require('dotenv').config();
module.exports ={
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB,
    dialect: process.env.DIALECT,
    pool:{
        max: 5,
        min: 0,
        idle: 30000,
        acquire: 10000, //maximum time, in milliseconds, that pool will try to get connection before throwing error
    }
}