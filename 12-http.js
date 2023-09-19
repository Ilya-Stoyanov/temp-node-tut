const http = require("http")

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url === '/') {
        res.end("welcom to our page")
        return
    }
    else if(req.url === '/about') { 
        res.end("Here is our short history")
        return
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are loking for</p>
            <a href="/">back to home</a>
        `)
        return
    }
    
})

server.listen(5000)