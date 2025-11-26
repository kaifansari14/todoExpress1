import express from "express";
import { readFiles,addFiles} from "../../utils/helper.js";

const router= express.Router();

router.get("/getuser", async(req,res) => {
    try {
        let allUsers = await readFiles()
        console.log(allUsers);
        res.status(200).json({msg:allUsers})


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})

export default router; 