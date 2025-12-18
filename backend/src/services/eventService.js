import { fieldValidation } from "../utils/validation.js"
import Event from "../models/evenetModel.js";


export const regisetEvent = async ( title, description, startDate, isPublish, note, imageURl) => {
    if (!fieldValidation( title, description, startDate)) {
        throw new error("Please input all fields")

    }

    const newEvent = await Event.create({
    
        title,
        description,
        startDate,
        isPublish,
        note,
        imageURl
    });

    return newEvent;
}