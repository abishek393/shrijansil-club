import { fieldValidation } from "../utils/validation.js"
import Event from "../models/evenetModel.js";
import Category from "../models/categoryModels.js";


export const regisetEvent = async (title, description, startDate, isPublish, note, imageURl) => {
    if (!fieldValidation(title, description, startDate)) {
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

export const updateEventService = async (id, title, description, note, ispublish, isActive) => {
    try {
        const event = await Event.findByPk(id);
        if (!event) {
            throw new Error("No event found");
        }

        await event.update({
            title,
            description,
            note,
            ispublish,
            isActive
        });


        return event;

    }
    catch (err) {
        console.log("Update event error:", err.message);
        throw err;
    }

}

// getAll events service
export const getAllEventService = async (search = "", limit = 10, offset = 0) => {
  try {
    const events = await Event.findAll({
      where: {
        title: {
          [Op.like]: `%${search}%` // search by title
        }
      },
      limit,
      offset,
      order: [["createdAt", "DESC"]]
    });

    const totalEvents = await Event.count({
      where: {
        title: {
          [Op.like]: `%${search}%`
        }
      }
    });

    return { events, totalEvents };
  } catch (err) {
    console.error("Error in getAllEventService:", err.message);
    throw err;
  }
};