import express from "express";
import { createVagaLab, deleteVagaLab, getTodasVagasLab, getVagaLab, getVagasLab, updateVagaLab } from "../controllers/vaga.js";
import { verifyLab } from "../utils/VerifyToken.js";

const router = express.Router();

// CREATE VAGA
router.post("/", createVagaLab); //OK

// UPDATE VAGA
router.put("/:id", updateVagaLab); //OK

// DELETE VAGA
router.delete("/:lab/:id", deleteVagaLab); //OK

// GET VAGA
router.get("/:lab/:id", getVagaLab); //OK

// GET ALL VAGA
router.get("/:lab", getVagasLab); //OK

router.get("/", getTodasVagasLab); //OK

export default router;