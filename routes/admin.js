const express=require('express')
const path=require('path')
const router=express.Router();
const mongoose=require('mongoose')
const product_schem=new mongoose.Schema({
    name:String,
    phno:String,
    city:String
})
const Product=mongoose.model('Product',product_schem)
mongoose.connect("mongodb://127.0.0.1:27017/fsd").then(()=>{console.log("connected success")}).catch((err)=>console.log(err))

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
});
router.post('/add-product',(req,res)=>{
    console.log('Form data:',req.body);

   const newProduct=new Product({
    name:req.body.name,
    phno:req.body.phno,
    city:req.body.city
   });
   newProduct.save()
    .then(()=>{
        console.log("product saved successfully");
        res.send('<b>Product submitted!</b>')
    })
    .catch(err=>{
        console.log("error saving products",err);
        res.status(500).send('Error saving model')
    });
   
});

module.exports=router;