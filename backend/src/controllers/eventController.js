import { regisetEvent, updateEventService, getAllEventService  } from "../services/eventService.js"


export const createEvent = async (req, res) => {
    console.log(req.file);
    const imageURl = req.file.path;
    const { title, description, startDate, isPublish, note } = req.body;
    
    try {
        const result = await regisetEvent( title, description, startDate, isPublish, note, imageURl);
        console.log(result);
         
        return res.status(200).json({message: "Successfully created new event", data: result});

    }
    catch (err) {
        console.log("Somthing went wrong", err.message);
        return res.status(500).json({ message: err.message });
    }

}

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, note, ispublish, isActive } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "Event id is required"
      });
    }

    const updatedEvent = await updateEventService(
      id,
      title,
      description,
      note,
      ispublish,
      isActive
    );

    return res.status(200).json({
      message: "Event updated successfully",
      data: updatedEvent
    });

  } catch (err) {
    console.error("Update Event Controller Error:", err.message);

    return res.status(500).json({
      message: err.message || "Internal Server Error"
    });
  }
};

//get all event
export const getAllEvent = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { events, totalEvents } = await getAllEventService(limit, offset);

    if (events.length === 0) {
      return res.status(404).json({
        message: "No events found"
      });
    }

    return res.status(200).json({
      message: "Events fetched successfully",
      page,
      limit,
      totalEvents,
      data: events
    });

  } catch (err) {
    console.error("Get All Events Error:", err.message);
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
};
