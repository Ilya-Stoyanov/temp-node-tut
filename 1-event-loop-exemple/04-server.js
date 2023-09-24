const { log } = require("console")
const http = require("http")

const server = http.createServer((req, result)=>{
    console.log("request event");
    result.end("Hello world")
})

server.listen(5000, () => {
    console.log("Server listening on port : 5000");
})