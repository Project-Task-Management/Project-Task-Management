import dotenv from "dotenv";
dotenv.config();
import pmsRouter from "./routers/pmsRouter.js";
import "./lib/mongoose.js";
<<<<<<< HEAD
import cors from "cors"
import userRouter from "./routers/userRouter.js";
import loginRouter from "./routers/loginRouter.js";
=======
import cors from "cors";
import userRouter from "./routers/userRouter.js";
import todoRouter from "./routers/todoRouter.js";

>>>>>>> eabae7b53fa126c80fce67e6fd105e7ec38a36ac
import express from "express";
const app = express();

const port = process.env.PORT || 4000;
app.use(cors());

app.use(express.json());
<<<<<<< HEAD
app.use("/product",pmsRouter)
app.use("/user",userRouter)
app.use("/login",loginRouter)


=======
app.use("/product", pmsRouter);
app.use("/user", userRouter);
app.use("/todo",todoRouter);
>>>>>>> eabae7b53fa126c80fce67e6fd105e7ec38a36ac

app.listen(port, () => {
    console.log(port, "i am on running");
});
