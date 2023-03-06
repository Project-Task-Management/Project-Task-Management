import express from "express"
const app = express()
import cors from "cors"


app.get("/",(req,res)=>{
    res.send("hi")
})
app.listen(1337,()=>{
    console.log("i am on running");
})