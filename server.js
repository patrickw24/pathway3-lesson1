var http = require('http')
var car = require('./car.js')
var url = require('url')
// http =  Hyper Text Transfer Protocol 
// HTML  = Hyper Text Markup Language
// <a> <h1> <p>

// ftp = file transfer protocol (dropbox, google drive)

// smtp = email (gmail, outlook, yahoo)

http.createServer( serverPurpose ).listen(3000)

function serverPurpose(req, res){
    res.writeHead(200, {'Content-Type': 'application/html'})
    // Create a Project with 2 routes 
    // perimeter: perform the operation of calculating the perimeter of an square 

    // add: perform the operation of calculation the addtion of 2 numbers

    res.write("<h1>Hello!! </h1>")

    let curlyParameters = url.parse(req.url, true).query
    let urlData  = url.parse(req.url)

    if (urlData.pathname === '/perimeter'){
        let sidea = parseInt(curlyParameters.sidea) 
        let sideb = parseInt(curlyParameters.sideb) 
        let perimeter =(sidea*2) + (sideb*2)
        res.write(`The perimeter is ${perimeter}`)
    }

    if (urlData.pathname === '/add'){
        let num1 = parseInt(curlyParameters.num1) 
        let num2 = parseInt(curlyParameters.num2)
        let addition = num1 + num2
        res.write(`The addition is ${addition}`)
    }

    res.end(`<h2>Good bye</h2>`)
}