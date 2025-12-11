const express = require("express");
const app = express();

app.get("/",(req, res ) => {
    return res.send("hellow from express server");
});

app.get("/hai" , ( req, res ) => {
    return res.send("hai from express server");
});


app.listen(3002,(req,res) => {
    console.log("server is listening on port http://localhost:3002")
}) 