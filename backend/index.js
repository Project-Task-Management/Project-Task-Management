import dotenv from "dotenv";
dotenv.config();

import "./lib/mongoose.js";

import express from "express";
const app = express();

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}`));


app.use(express.json());
app.use("/reports",()=>console.log(port));
