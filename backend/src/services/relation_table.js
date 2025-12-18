import { sequelize } from "../config/db.js";
const syncDatabase = async()=>{
    try{
        await sequelize.authenticate();
        
        const seque = await sequelize.sync({
            alter:true
        })
        console.log("database synced    ");
    }
    catch(err){
        console.log("something went wrong",err);
    }
}

export default syncDatabase;