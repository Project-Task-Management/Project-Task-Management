import dotenv from "dotenv";
dotenv.config();

import loginRouter from "./routers/loginRouter.js"
import pmsRouter from "./routers/pmsRouter.js"
import notizRouter from "./routers/notizRouter.js"


import "./lib/mongoose.js";
<<<<<<< HEAD

import cors from "cors";
import kalanderRouter from "./routers/kalanderRouter.js";
import userRouter from "./routers/userRouter.js";
import loginRouter from "./routers/loginRouter.js";
=======
import userRouter from "./routers/userRouter.js";
import loginRouter from "./routers/loginRouter.js";
import cors from "cors";
>>>>>>> pms
import todoRouter from "./routers/todoRouter.js";

import express from "express";

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
<<<<<<< HEAD
=======

app.use("/login", loginRouter);

>>>>>>> pms
app.use("/product", pmsRouter);

app.use("/kalander", kalanderRouter);
app.use("/user", userRouter);
<<<<<<< HEAD
app.use("/login", loginRouter);
=======
>>>>>>> pms
app.use("/todo", todoRouter);

app.listen(port, () => {
  console.log(port, "i am on running");
});
