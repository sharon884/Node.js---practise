const express = require("express");
const app = express();



app.use(( req, res, next ) => {
    console.log(req.method)
    next();
});


// app.use(( req, res, next ) => {
//     if (req.method === "GET" ) {
//         return res.send("blocked");
//     };
//     next();
// })


app.get("/",(req, res ) => {
    return res.send("hellow from express server");
});

app.get("/hai" , ( req, res ) => {
    return res.send("hai from express server");
});

app.get("/sum/:num1",( req, res ) => {
    let path = req.params.num1;
    let query = req.query.num2;

    let sum = Number(path) + Number(query);
    
    return res.send(`sum of path and query == ${sum}`);
});



app.listen(3002,(req,res) => {
    console.log("server is listening on port http://localhost:3002")
})  