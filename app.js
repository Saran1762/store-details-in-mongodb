const express=require('express')
const path=require('path')
const app=express();
const bp=require('body-parser')
const adminRouter=require('./routes/admin')
const shopRoutes=require('./routes/shop')
app.use(express.static(path.join(__dirname,'public')))
app.use(bp.urlencoded())
app.use('/admin',adminRouter)
app.use(shopRoutes)
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(3000)