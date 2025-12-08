// const http = require("http");

// const server = http.createServer(( req,res ) => {
//     if ( req.url == "/") {
//         res.end("helowfrom http server");
//     }else if ( req.url === "/hai" ) {
//         res.end("hai from http server");
//     };


  
// });



// server.listen(3001,() => {
//     console.log("server is listening on port http://localhost:3001")
// })


const express = require("express");
const app = express();

const middleware = ( ( req, res , next ) => {
     if ( req.method === "GET" ) {
        return res.send("blocked");
     };

     next();
});

app.get("/", middleware, (req, res) => {
    res.send("Home route");
});

app.get("/hai", (req, res) => {
    res.send("Hai route");
});


app.listen(3002,() => {
    console.log("sever is running http://localhost:3002");
});