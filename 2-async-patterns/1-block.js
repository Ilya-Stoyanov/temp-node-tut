const http = require("http")

const server = http.createServer((req, result)=>{
    if (req.url === '/') result.end('Home Page')
    if (req.url === '/about') {
        // blocking code
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
            console.log(`${i} ${j}`);               
            } 
        }
        result.end('About Page')
    }
    // result.end('Error Page')
})

server.listen(5000, () => {
    console.log("Server listening on port : 5000");
})