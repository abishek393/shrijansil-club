import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Event = sequelize.define(
    "Event", 
    {
        title:{
            Type:DataTypes.STRING(250),
            allownull: false,
            index:true
        },
        description:{
            Type:DataTypes.STRING(250),
            allownull:false
        },
        startDate:{
            Type:DataTypes.DATE,
            allownull:false,
            isDate: true,
        },
        isPublish:{
            Type:DataTypes.BOOLEAN,
            defaultValue: true
        },
        note:{
            Type:DataTypes.STRING(250),
            
        },
        isActive:{
            Type:DataTypes.BOOLEAN,
            defaultValue:true,
            default:true
        }
    }
) 

export default Event;
