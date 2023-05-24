const express= require("express")
const app= express()
const mongoose=require("mongoose")
const cors =require("cors")

require('dotenv').config()
app.use(express.json())
app.use(cors())

const productschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const Proproduct=mongoose.model("Proproduct", productschema)

app.post("/product", async(req,res)=>{
    const newProduct= new Proproduct({
        ...req.body
    })
    await newProduct.save()
    res.send(newProduct)
})

app.get("/product", async (req,res)=>{
    const data= await Proproduct.find()
    res.send(data)
})

app.get("/product/:id", async (req, res)=>{
    const { id }=req.params
    const target=await Proproduct.findById(id)
     res.send(target)
})

app.delete("/product/:id", async (req,res)=>{
    const { id }=req.params
    await Proproduct.findByIdAndDelete(id)
    res.send("product deleted")
})
mongoose.connect(process.env.DB_CONNECT).then(()=>{
    console.log("DB CONNECTED")
})

app.listen(process.env.PORT, ()=>{
    console.log("app running")
})