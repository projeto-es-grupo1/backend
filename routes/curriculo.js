import express from "express";
import { verifyUser } from "../utils/VerifyToken.js";
import { createCurriculoUser, deleteCurriculoUser, getCurriculoUser, updateCurriculoUser } from "../controllers/curriculo.js";

const router = express.Router();

// DELETE CURRICULO
router.delete("/:user/:id", verifyUser, deleteCurriculoUser); 

// UPDATE CURRICULO
router.put("/:user/:id", verifyUser, updateCurriculoUser); 

// CREATE CURRICULO
router.post("/:user", verifyUser, createCurriculoUser);

// GET CURRICULO
router.get("/:user/:id", verifyUser, getCurriculoUser);

export default router;