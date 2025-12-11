const express = require("express");
const app = express();
const fs = require("fs/promises");




app.use((req, res, next) => {
    console.log(req.method)
    next();
});


// app.use(( req, res, next ) => {
//     if (req.method === "GET" ) {
//         return res.send("blocked");
//     };
//     next();
// })


app.get("/", (req, res) => {
    return res.send("hellow from express server");
});

app.get("/hai", (req, res) => {
    return res.send("hai from express server");
});

app.get("/sum/:num1", (req, res) => {
    let path = req.params.num1;
    let query = req.query.num2;

    let sum = Number(path) + Number(query);

    return res.send(`sum of path and query == ${sum}`);
});




async function readfile() {
    try {
        const data = await fs.readFile("example.txt", "utf-8");
        console.log(data);
    } catch (error) {

        console.log("error reading file ", error);
    }
};


readfile();


let content = "hai we writing a file ";

async function writefile(params) {

    try {
        fs.writeFile("example.text", content, "utf-8");
        console.log("file writern successfully");
    } catch (error) {
        console.log("file writening is failed", error)
    }
};


writefile()



async function deletefile (params) {
    
    try {
        fs.unlink("example.text");
        console.log("file delete successfull");
    }catch ( error ) {
        console.log("error happened while deleting file ", error);
    }
};

deletefile()


app.listen(3002, (req, res) => {
    console.log("server is listening on port http://localhost:3002")
})  