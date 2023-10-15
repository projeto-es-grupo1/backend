import express from "express";
import { verifyUser } from "../utils/VerifyToken.js";
import { deleteAccount, updateUserPassword, updateUsername } from "../controllers/user.js";

const router = express.Router();

// CHANGE USERNAME
router.put("/change_username/:id", verifyUser, updateUsername); 

// CHANGE PASSWORD
router.put("/change_password/:id", verifyUser, updateUserPassword); 

// DELETE ACCOUNT
router.delete("/delete_account/:id", verifyUser, deleteAccount); 

export default router;