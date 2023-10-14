import express from "express";
import { createVagaLab, deleteVagaLab, getVagaLab, getVagasLab, updateVagaLab } from "../controllers/vaga.js";
import { verifyLab } from "../utils/VerifyToken.js";

const router = express.Router();

// CREATE VAGA
router.post("/", verifyLab, createVagaLab); 

// UPDATE VAGA
router.put("/:id", verifyLab, updateVagaLab); 

// DELETE VAGA
router.delete("/:lab/:id", verifyLab, deleteVagaLab);

// GET VAGA
router.get("/:lab/:id", getVagaLab); 

// GET ALL VAGA
router.get("/:lab", getVagasLab); 

export default router;