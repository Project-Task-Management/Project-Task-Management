import { Router } from "express";
import * as controller from "../controllers/kalanderController.js";
const router = Router();
router
  .get("/", controller.getAll)
  .post("/", controller.create)
  .delete("/:id", controller.removeKalander);
export default router;
