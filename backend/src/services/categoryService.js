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
    catch(err){
        console.log("Create category err:". err.message)
        throw err;
    }

};


export const updateCategoryServices = async(id, title) =>{
    try{
        if(!fieldValidation(title)){
            throw new Error("Please input all fields");
        }

        const category = await Category.findByPk(id);
        
        if(!category){
            throw new Error("Category not found");

        }

        category.title = title;
        await category.save();

        return category;

    }
    catch(err){
        console.log("Somthing went wrong:", err.message);
        throw new Error(err)
    }
}