import dotenv from "dotenv";
dotenv.config();
import "./lib/connect_db.js"
import cors from "cors"

import log from "./middlewares/log.js"
app.use(log)

import User from "./router/User.js"

import express from "express"
const app = express();

 
const port = proces.env.PORT || ;
app.use(cors())


app.use(express.json());
app.use("/users", User)



app.listen(port,()=>{
    console.log(port,"läuft")
})