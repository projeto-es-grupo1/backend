import express from "express";
import { verifyUser } from "../../utils/verifyToken.js";

const router = express.Router();

// CREATE COMENTARIO
router.post("/", verifyUser, updateUser); 

// UPDATE COMENTARIO
router.put("/:id", verifyUser, updateUser); 

// DELETE COMENTARIO
router.delete("/:id", verifyUser, updateUser); 

// GET ALL COMENTARIOS
router.get("/:id_vaga", verifyUser, updateUser); 

export default router;