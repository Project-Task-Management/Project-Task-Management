import { Router } from "express";
import * as controller from "../controllers/notizController.js";

const router = Router()

router.get("/", controller.getAllNotiz);
// router.put("/:id", controller.replace);
router.patch("/:id", controller.updateOne);
router.delete("/:id", controller.remove);
router.post("/", controller.create);

export default router