var http = require('http')
var url = require('url')
var uc = require('upper-case')

http.createServer( serverPurpose ).listen(3000)

function serverPurpose(req, res){
    
    // Create a Project with 2 routes 
    // perimeter: perform the operation of calculating the perimeter of an square 
    // add: perform the operation of calculation the addtion of 2 numbers

    let urlObject =  url.parse(req.url, true)
    let parameters = urlObject.query 

    if (urlObject.pathname === '/perimeter'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        let sidea = parseInt(parameters.sidea) 
        let sideb = parseInt(parameters.sideb) 
        let perimeter =(sidea*2) + (sideb*2)
        let response = uc.upperCase(`The perimeter is ${perimeter}`)
        res.write(response)
    }else if (urlObject.pathname === '/add'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        let num1 = parseInt(parameters.num1) 
        let num2 = parseInt(parameters.num2)
        let addition = num1 + num2
        let response = uc.upperCase(`The addition is ${addition}`)
        res.write(response)
    }else {
        res.writeHead(400, {'Content-Type': 'text/html'})
        res.write(`<h1>Error, this site does not exists </h1>`)
    }



    res.end()
}