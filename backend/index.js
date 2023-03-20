import dotenv from "dotenv";
dotenv.config();
import pmsRouter from "./routers/pmsRouter.js";
import "./lib/mongoose.js";
<<<<<<< HEAD

import cors from "cors";
import kalanderRouter from "./routers/kalanderRouter.js";
import userRouter from "./routers/userRouter.js";
import loginRouter from "./routers/loginRouter.js";
import todoRouter from "./routers/todoRouter.js";

=======
import cors from "cors";
import userRouter from "./routers/userRouter.js";
import loginRouter from "./routers/loginRouter.js";
import todoRouter from "./routers/todoRouter.js";
>>>>>>> Monsif-Todo
import express from "express";

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use("/product", pmsRouter);
<<<<<<< HEAD
app.use("/kalander", kalanderRouter);
app.use("/user",userRouter)
app.use("/login",loginRouter)
app.use("/todo",todoRouter);
=======
app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/todo", todoRouter);

>>>>>>> Monsif-Todo
app.listen(port, () => {
    console.log(port, "i am on running");
});
