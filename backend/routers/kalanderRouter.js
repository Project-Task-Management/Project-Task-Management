import { Router } from "express";
import * as controller from "../controllers/kalanderController.js";
const router = Router();
router
  .get("/", controller.getAll)
  .get("/:id", controller.getOne)
  .post("/", controller.create)
  .delete("/:id", controller.deleteKalander);
export default router;
