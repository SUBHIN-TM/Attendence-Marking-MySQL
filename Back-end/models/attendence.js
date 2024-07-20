import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnection.js";
import User from "./user.js";

const Attendence=sequelize.define('Attendence',{
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    is_present:{
        type:DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
})

Attendence.belongsTo(User,{foreignKey:'user_id'})
export default Attendence