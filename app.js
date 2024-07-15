const http=require('http')
const routes=require('./routes')
//first method
// function rqListener(req,res){
// console.log(req?.url,req?.headers);
// }
const server =http.createServer(routes);

//second method
// http.createServer(function(req,res){

// })
server.listen(3000)