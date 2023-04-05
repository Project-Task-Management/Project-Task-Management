import { Router } from "express";
import * as controller from "../controllers/todoController.js"
const router = Router();
router
    .get("/", controller.getAllTodos)
    .get("/:id", controller.getOneTodo)
    .post("/", controller.createTodo)
    // .put("/:id", controller.updateTodo)
    .delete("/:id", controller.deleteOneTodo);

export default router;
