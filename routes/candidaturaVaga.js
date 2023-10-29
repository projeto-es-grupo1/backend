import express from "express";
import { verifyLab, verifyUser } from "../utils/VerifyToken.js";
import { createCandidatura, deleteCandidatura, getCandidatura, getCandidaturas, getCandidaturasOrdenadas } from "../controllers/candidatura.js";

const router = express.Router();

// CREATE CANDIDATURA
router.post("", createCandidatura); // OK

// DELETE CANDIDATURA
router.delete("/:id", deleteCandidatura); // OK

// GET ALL CANDIDATURAS ORDENADAS
router.get("/ordenadas/:vaga", getCandidaturasOrdenadas);

// GET CANDIDATURA
router.get("/:vaga/:id", getCandidatura); 

// GET ALL CANDIDATURAS
router.get("/:vaga", getCandidaturas); 



export default router;