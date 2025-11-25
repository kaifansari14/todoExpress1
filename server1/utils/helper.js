import fs from "fs/promises"

const db = "/home/kaif/todoExpress1/server1/data.json"

async function readconstent() {
    let userData = await fs.readFile(db, "utf-8")
    return JSON.parse(userData);
}
export default readconstent 
