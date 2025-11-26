import fs from "fs/promises" 

async function readCountent(file) {
     let allData = await fs.readFile(file, "utf-8");
     console.log(allData);
     return allData;
}

readCountent("kaif.txt")

// addContent("kaif.txt", "hello kaif")

async function addContent(file, content) {
    await fs.writeFile(file,content);
    console.log("File Created");
}

addContent("kaif.txt", "Hello kaif and fariha khan\nIs MY GIRL BEST FRIEND ")
