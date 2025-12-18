import Category from "../models/categoryModels.js";
import { fieldValidation } from "../utils/validation.js";



export const createCategoryService = async (eventId, title) => {
    try {
        if (!fieldValidation(eventId, title)) {
            throw new err("please input all fields");
        }

        const newCategory = await Category.create({
            eventId,
            title
        });

        return newCategory;


    }
    catch (err) {
        console.log("Create category err:".err.message)
        throw err;
    }

};


export const updateCategoryServices = async (id, title, isActive) => {
    try {
       

        const category = await Category.findByPk(id);

        if (!category) {
            throw new Error("Category not found");

        }

        
        await category.update({
            title,
            isActive
        })

        return category;

    }
    catch (err) {
        console.log("Somthing went wrong:", err.message);
        throw new Error(err)
    }
}

