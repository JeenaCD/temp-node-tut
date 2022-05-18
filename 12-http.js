const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
    res.write('Welcome to our home page');
    res.end()
    }
    if(req.url ==='/about'){
        res.end('here is our short history')
    }
    res.end(`<h1>Ooops</h1>
    <p>We can't seem to find the page u r looking for</p>
    <a href = "/">back home</a>`)

})

server.listen(5000)