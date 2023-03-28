import dotenv from "dotenv";
dotenv.config();

import pmsRouter from "./routers/pmsRouter.js";
import notizRouter from "./routers/notizRouter.js";

import "./lib/mongoose.js";

import cors from "cors";
import kalanderRouter from "./routers/kalanderRouter.js";
import userRouter from "./routers/userRouter.js";
<<<<<<< HEAD
import loginRouter from "./routers/loginRouter.js";

import todoRouter from "./routers/todoRouter.js";

=======

import todoRouter from "./routers/todoRouter.js";









>>>>>>> mohsen1
import express from "express";

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
app.use("/login", loginRouter);

app.use("/product", pmsRouter);

app.use("/kalander", kalanderRouter);
app.use("/user", userRouter);

app.use("/login", loginRouter);

app.use("/todo", todoRouter);
=======


app.use("/kalander", kalanderRouter);


app.use("/todo", todoRouter);


app.use("/product",pmsRouter)

app.use("/notiz",notizRouter)

app.use("/user",userRouter)
app.use("/login",loginRouter)










>>>>>>> mohsen1

app.listen(port, () => {
  console.log(port, "i am on running");
});
