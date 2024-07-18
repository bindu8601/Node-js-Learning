const http=require('http')
const path=require('path')
const express= require('express')

const bodyParser=require('body-parser')
const rootDir=require('./util/path')

const adminRouter= require('./routes/admin')
const shopRouter=require('./routes/shop')

const app= express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRouter)
app.use(shopRouter)
app.use((req,res,next)=>{
res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})




// const server =http.createServer(app);
// server.listen(3000)
app.listen(3000)