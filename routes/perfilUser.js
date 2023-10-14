import express from "express";
import { createPerfilUser, deletePerfilUser, getPerfilUser, updatePerfilUser } from "../controllers/perfil.js";
import { verifyUser } from "../utils/VerifyToken.js";

const router = express.Router();

// CREATE PERFIL
router.post("/", verifyUser, createPerfilUser); 

// UPDATE PERFIL
router.put("/:id", verifyUser, updatePerfilUser); 

// DELETE PERFIL
router.delete("/:id", verifyUser, deletePerfilUser); 

// GET PERFIL
router.get("/:user", verifyUser, getPerfilUser); 

export default router;