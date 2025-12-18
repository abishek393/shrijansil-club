import { fieldValidation } from "../utils/validation.js"



export const regisetEvent = async (title, description, startDate, isPublish, note) => {
    if (!fieldValidation(title, description, startDate, isPublish, note)) {
        throw new error("Please input all fields")

    }
}