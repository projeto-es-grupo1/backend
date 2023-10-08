import express from "express";
import { verifyToken, verifyUser, verifyLab } from "../../utils/verifyToken.js";

const router = express.Router();

// // UPDATE
// router.put("/:id", verifyUser, updateUser); 

export default router;