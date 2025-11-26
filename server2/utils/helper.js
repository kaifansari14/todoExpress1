import fs from "fs/promises"

const dbPath = "/home/kaif/todoExpress1/server2/data.json";

async function readFiles() {
     let allData = await fs.readFile(dbPath, "utf-8");
     console.log(allData);
     return JSON.parse(allData);
}

async function addFiles(file, content) {
    await fs.writeFile(file,content);
    console.log("File Created")
}

export { readFiles,addFiles}
