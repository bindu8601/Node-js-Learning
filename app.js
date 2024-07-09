const http=require('http')
//first method
// function rqListener(req,res){
// console.log(req?.url,req?.headers);
// }
const server =http.createServer((req,res)=>{
    console.log(req.url)
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title><head>')
    res.write('<body><h1>Hello</h1></body>')
    res.write('</html>')
    res.end()
});

//second method
// http.createServer(function(req,res){

// })
server.listen(3000)