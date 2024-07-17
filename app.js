const http=require('http')

const express= require('express')

const app= express()
app.use('/product',(req,res,next)=>{
    console.log('in the another middleware');
    res.send('<h1>This is a product</h1>')
})

app.use('/',(req,res,next)=>{
    console.log('in the another middleware');
    res.send('<h1>Hello From Express</h1>')
})

// const server =http.createServer(app);
// server.listen(3000)
app.listen(3000)