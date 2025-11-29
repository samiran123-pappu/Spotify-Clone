import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllUsers, getMessages } from "../controller/user.controller.js";

const router = Router();

router.get("/",protectRoute ,getAllUsers);
router.get("/messages/:userId", protectRoute, getMessages); //get messages with a specific user

export default router;