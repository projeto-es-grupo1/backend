import express from "express";
import { verifyLab } from "../../utils/verifyToken.js";
import { createVagaLab, deleteVagaLab, getVagaLab, getVagasLab, updateVagaLab } from "../controllers/vaga.js";

const router = express.Router();

// CREATE VAGA
router.post("/", verifyLab, createVagaLab); 

// UPDATE VAGA
router.put("/:id", verifyLab, updateVagaLab); 

// DELETE VAGA
router.delete("/lab/:id", verifyLab, deleteVagaLab); // Falta deletar todas as candidaturas

// GET VAGA
router.get("/:lab/:id", getVagaLab); 

// GET ALL VAGA
router.get("/:lab", getVagasLab); 

export default router;