var http = require('http')

http.createServer( serverPurpose ).listen(3000)

function serverPurpose(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})

    // create an algorithm to calculate the perimeter of a Square

    let sidea = 10
    let sideb = 10
    let perimeter = (sidea*2)+(sideb*2)

    res.write(`<h1>Hello</h1>`)
    res.write(`<p>This is my first node Js Project</p>`)
    res.write(`The perimeter is ${perimeter}`)
    res.end(`<h2>Good bye</h2>`)
}