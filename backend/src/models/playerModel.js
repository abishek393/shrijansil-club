import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const Player = sequelize.define(
    "Player",
    {
        fullName: {
            Type: DataTypes.STRING,
            allowNull: false

        },
        address: {
            Type: DataTypes.STRING,
            allowNull: false
        },
        dateOfBirth: {
            Type: DataTypes.DATE,
            validate: {
                isDate: true,
                isValidFormat(value) {

                    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                        throw new Error("Date must be in YYYY-MM-DD format");
                    }
                }

            },
        },
        gender: {
            Type: DataTypes.ENUM("male", "female", "other"),
            allowNull: false,

        },
        email: {
            Type: DataTypes.STRING,

        },
        contactNumber: {
            Type: DataTypes.STRING,
            allowNull: false
        },
        TshirtSize: {
            Type: DataTypes.ENUM("XS", "S", "M", "L", "XL", "XXL"),
            allowNull:false

        },
        bloodGroup:{
            Type:DataTypes.ENUM("A+", "A-", "B+", "B-","AB+", "AB-", "o+", "o-"),
            allowNull:false
        },
        emergencyContact:{
            Type:DataTypes.STRING,
            allowNull:false
        },
        paymentVoucher:{
            Type:DataTypes.STRING,
            allowNull:false
        },
        authenticateDocument:{
            Type:DataTypes.STRING,
            allowNull:false
        }

    }
)

export default Player;