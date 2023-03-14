import { Router } from "express";
import * as user from "../controller/user.js";

const router = Router()

router.get("/", user.getAll);
router.put("/:id", user.replace);
router.patch("/:id", user.update);
router.delete("/:id", user.remove);
router.post("/", user.create);

export default router