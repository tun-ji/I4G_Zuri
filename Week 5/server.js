const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

http.createServer(function(req, res) {
    var query = url.parse(req.url, true)

    if (req.url === '/'){
        let fPath = path.join(__dirname, 'public', 'index.html')
        fs.readFile(fPath, 'utf8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    } else if (req.url === '/home') {
        let fPath = path.join(__dirname, 'public', 'index.html')
        fs.readFile(fPath, 'utf8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    } else {
        var fileName = "." + query.pathname
        let fPath = path.join(__dirname, 'public', fileName)
        fs.readFile(fPath, function(err, data){
            if (err) {
                console.log(err)
                res.writeHead(404, {'Content-Type': 'text/html'})
                return res.end("404 Not Found")
            }
    
            res.writeHead(200, { 'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        } )
    }
}).listen(4000)