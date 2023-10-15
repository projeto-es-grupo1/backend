import express from "express";
import { verifyLab, verifyUser } from "../utils/VerifyToken.js";
import { createCandidatura, deleteCandidatura, getCandidatura, getCandidaturas, getCandidaturasOrdenadas } from "../controllers/candidatura.js";

const router = express.Router();

// CREATE CANDIDATURA
router.post("", verifyUser, createCandidatura); 

// DELETE CANDIDATURA
router.delete("/:id", verifyUser, deleteCandidatura); 

// GET ALL CANDIDATURAS ORDENADAS
router.get("/ordenadas/:vaga", verifyLab, getCandidaturasOrdenadas);

// GET CANDIDATURA
router.get("/:vaga/:id", verifyLab, getCandidatura); 

// GET ALL CANDIDATURAS
router.get("/:vaga", verifyLab, getCandidaturas); 



export default router;