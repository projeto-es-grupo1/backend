import express from "express";
import { verifyToken, verifyUser, verifyLab } from "../../utils/verifyToken.js";

const router = express.Router();

// CHANGE USERNAME
router.put("/:id", verifyUser, updateUser); 

// CHANGE PASSWORD
router.put("/:id", verifyUser, updateUser); 

// DELETE ACCOUNT
router.delete("/:user/:id", verifyUser, updateUser); 

export default router;