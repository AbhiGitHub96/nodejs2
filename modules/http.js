const http = require('http')


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is short history')
    }
    res.end(`
     <h1>Opps!</h1>
     <p>we can't find the link</p>
     <a href='/'>go back</a>
    `)
})

server.listen(5000)