let http = require('http')
let url = require('url')

http.createServer(serverExercise).listen(3000)



function serverExercise(req, res){
    let urlpath = url.parse(req.url, true)
    let parameters = urlpath.query

    if (urlpath.pathname === '/rectangle'){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        let width = parseInt(parameters.width)
        let height = parseInt(parameters.height)
        let area = width * height
        let result = `Welcome! The area is ${area}`
        res.write(result)
    }else if (urlpath.pathname === '/circle'){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        let radius = parseInt(parameters.radius)
        let areaCircle = 3.14 * (radius * radius)
        let result = `Welcome! The area of a circle is ${areaCircle}`
        res.write(result)
    }else if (urlpath.pathname === '/multiply'){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        let a = parseInt(parameters.a)
        let b = parseInt(parameters.b)
        let result = a*b
        let final = `Welcome! The multiplication is ${result}`
        res.write(final)
    }else if(urlpath.pathname === '/divide'){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        let a = parseInt(parameters.a)
        let b = parseInt(parameters.b)
        let result = a / b
        let final = `Welcome! The division is ${result}`
        res.write(final)
    }else if(urlpath.pathname === '/subtract'){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        let a = parseInt(parameters.a)
        let b = parseInt(parameters.b)
        let result = a - b
        let final = `Welcome! The subtraction is ${result}`
        res.write(final)
    }else {
        res.writeHead(400, {'Content-Type': 'text/html'})
        res.write(`<h1>This page does not exist</h1>`)
    }

res.end('<p>Goodbye!</p>')
}


