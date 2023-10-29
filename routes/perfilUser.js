import express from "express";
import { createPerfilUser, deletePerfilUser, getPerfilUser, updatePerfilUser } from "../controllers/perfil.js";
import { verifyUser } from "../utils/VerifyToken.js";

const router = express.Router();

// CREATE PERFIL
router.post("/", createPerfilUser); //OK

// UPDATE PERFIL
router.put("/:id", updatePerfilUser); //OK

// DELETE PERFIL
router.delete("/:id", deletePerfilUser); //OK

// GET PERFIL
router.get("/:user", getPerfilUser);  //OK

export default router;