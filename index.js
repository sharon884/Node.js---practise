const http =  require("http");

const server = http.createServer((req,res)=> {
    if ( req.url == "/") {
        res.end("hellow world ");
    }else {
        res.end("hai world");
    }
});





server.listen(3001,() => {
    console.log("server is listening on http://localhost:3001")
})