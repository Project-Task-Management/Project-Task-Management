import {Router} from "express"
import * as controller from "../controllers/loginController.js"
const router = Router()
router .post("/",controller.compareUser)
export default router