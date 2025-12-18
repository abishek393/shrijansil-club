import Player from "../models/playerModel.js";
import { fieldValidation } from "../utils/validation.js";



export const registerPlayerServices = async (fullName, address, dateOfBirth, gender, email, contactNumber, TshirtSize, bloodGroup, emergencyContact, paymentVoucher, authenticateDocument) => {
    try {
        if (!fieldValidation(fullName, address, dateOfBirth, gender, email, contactNumber, TshirtSize, bloodGroup, emergencyContact, paymentVoucher, authenticateDocument)) {
            throw new Error("Please enter all fields");
        }

        const newPlayer = await Player.create({ fullName, address, dateOfBirth, gender, email, contactNumber, TshirtSize, bloodGroup, emergencyContact, paymentVoucher, authenticateDocument });

        if (!newPlayer) {
            console.log("Cannot create user:")
            throw new Error("Cannot create user. Please try again");
        }
        return newPlayer
    }
    catch (err) {
        
        throw new Error(err.message || "Something went wrong");

    }






}