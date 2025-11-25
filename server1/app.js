import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
// import UserRouter from "./controllers/user/index.js"
const PORT = process.env.PORT;

app.get("/", (req,res) => {
    try {
        let a = 10
        console.log(a);
        res.status(200).json({msg:"LIVE"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})

// app.use("/user", UserRouter)
app.listen(PORT,()=>{
    console.log(`Server is Live at http://localhost:${PORT}`);
})
