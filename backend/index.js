import dotenv from "dotenv";
dotenv.config();
import pmsRouter from "./routers/pmsRouter.js";
import "./lib/mongoose.js";
import cors from "cors";
import kalanderRouter from "./routers/kalanderRouter.js";

import express from "express";
const app = express();

const port = process.env.PORT || 4000;
app.use(cors());

app.use(express.json());
app.use("/product", pmsRouter);

app.use("/kalander", kalanderRouter);

app.listen(port, () => {
  console.log(port, "i am on running");
});
