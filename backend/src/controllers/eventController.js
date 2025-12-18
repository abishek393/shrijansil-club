import { regisetEvent } from "../services/eventService.js"


export const createEvent = async (req, res) => {
    console.log(req.file);
    const imageURl = req.file.path;
    const { title, description, startDate, isPublish, note } = req.body;
    
    try {
        const result = await regisetEvent(title, description, startDate, isPublish, note, imageURl);
        console.log(result);
         
        return res.status(200).json({message: "Successfully created new event", data: result});

    }
    catch (err) {
        console.log("Somthing went wrong", err.message);
        return res.status(500).json({ message: err.message });
    }








}