import express from "express";
import { verifyUser } from "../utils/VerifyToken.js";
import { createComentarioVaga, deleteComentarioVaga, getCometariosVaga, updateComentarioVaga } from "../controllers/comentario.js";

const router = express.Router();

// CREATE COMENTARIO
router.post("/", verifyUser, createComentarioVaga); 

// UPDATE COMENTARIO
router.put("/:id", verifyUser, updateComentarioVaga); 

// DELETE COMENTARIO
router.delete("/:id", verifyUser, deleteComentarioVaga); 

// GET ALL COMENTARIOS
router.get("/:id_vaga", verifyUser, getCometariosVaga); 

export default router;