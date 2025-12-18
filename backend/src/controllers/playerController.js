import { registerPlayerServices } from "../services/playerService.js";


export const registerPlayer = async (req, res) => {
  
    console.log("This is body:", req.body);
    const { fullName, address, dateOfBirth, gender, email, contactNumber, TshirtSize, bloodGroup, emergencyContact } = req.body;
  console.log("This is req file:", req.files);
    // const { authenticateDocument, paymentVoucher} = req.files;
    const paymentVoucher = req.files?.paymentVoucher?.[0];
    console.log("this is payment voucher",paymentVoucher)
    const authenticateDocument = req.files?.paymentVoucher?.[0]
    console.log("this is date of birth",typeof(dateOfBirth))
    

    try {
        const result = await registerPlayerServices(fullName, address, dateOfBirth, gender, email, contactNumber, TshirtSize, bloodGroup, emergencyContact, paymentVoucher.path, authenticateDocument.path);

        return res.status(200).json({message:"User created", data:result});
    }
    catch(err){
        console.log("Somthing went wrong:", err.message);

    }
    }

