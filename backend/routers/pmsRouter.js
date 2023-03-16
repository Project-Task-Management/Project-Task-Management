import { Router } from "express";
import * as controller from "../controllers/pmsController.js";
const router = Router();
router

        .get("/",controller.getAllProducts)
        .get("/:productId",controller.getProduct)
        .post("/",controller.createProduct)
        .patch("/:productId",controller.updateProduct)
        .delete("/:productId",controller.deleteProduct)
        .delete("/",controller.deleteAllProducts)


export default router;
