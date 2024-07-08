const http=require('http')
//first method
function rqListener(req,res){
console.log(req);
}
const server =http.createServer(rqListener);

//second method
// http.createServer(function(req,res){

// })
server.listen(3000)