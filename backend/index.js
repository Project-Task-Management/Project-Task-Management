import dotenv from "dotenv";
dotenv.config();

import pmsRouter from "./routers/pmsRouter.js";
import notizRouter from "./routers/notizRouter.js";

import "./lib/mongoose.js";

import cors from "cors";
import kalanderRouter from "./routers/kalanderRouter.js";
import userRouter from "./routers/userRouter.js";

import loginRouter from "./routers/loginRouter.js";

import todoRouter from "./routers/todoRouter.js";

import express from "express";

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());


app.use("/login", loginRouter);

app.use("/product", pmsRouter);

app.use("/kalander", kalanderRouter);
app.use("/user", userRouter);


app.use("/todo", todoRouter);

app.use("/notiz",notizRouter)

app.listen(port, () => {
  console.log(port, "i am on running");
});
