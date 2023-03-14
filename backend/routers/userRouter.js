import { Router } from "express";
import * as controller from "../controllers/userController.js";
const router = Router();

router.post("/", controller.register);
export default router