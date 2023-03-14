
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose.connect(
    process.env.MONGODB_URI,
    {
   
        dbName: process.env.DATABASE,
    }
).then(() => console.log("connected via mongoose"));
