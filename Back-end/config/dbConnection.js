import { Sequelize } from "sequelize";
import env from "dotenv";
env.config();

export const sequelize = new Sequelize('attendence', 'root', process.env.DB_PASSWORD, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false 
});


export const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL connected...');
        await sequelize.sync();
        console.log('Database synchronized...');
    } catch (err) {
        console.log('Error: ' + err);
    }
};

