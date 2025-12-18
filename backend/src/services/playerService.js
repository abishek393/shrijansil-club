import Player from "../models/playerModel.js";
import { fieldValidation } from "../utils/validation.js";



export const registerPlayer = async (fullName, address, dateOfBirth, gender, email, contactNumber, TshirtSize, bloodGroup, emergencyContact, paymentVoucher, authenticateDocument) => {

    if (!fieldValidation(fullName, address, dateOfBirth, gender, email, contactNumber, TshirtSize, bloodGroup, emergencyContact, paymentVoucher, authenticateDocument)) {
        throw new Error("Please enter all fields");
    }

    



}