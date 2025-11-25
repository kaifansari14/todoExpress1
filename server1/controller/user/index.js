import express from "express"
import readconstent from "../../utils/helper.js"

const router = express.Router()

router.get("/fetch", async (req,res) =>{
    try {
        let data = await readconstent()
        console.log(data);
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})
export default router 