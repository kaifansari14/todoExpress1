import express from "express";
import dotenv from "dotenv";
import fs from "fs/promises";
import userRouter from "./controllers/users/index.js";
 dotenv.config()

const PORT = process.env.PORT;

const dbPath = "../server2/data.json"
const app = express();

app.get("/", (req,res) => {
    try {
        let a = 10
        console.log(a);
        res.status(200).json({ msg: "Server is Running"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})
 
app.use("/users", userRouter)

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})
