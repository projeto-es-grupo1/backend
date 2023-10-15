import express from "express";
import { verifyUser } from "../utils/VerifyToken.js";
import { curtirVaga, descurtirVaga, getCurtida } from "../controllers/curtida.js";

const router = express.Router();

// CURTIR VAGA
router.post("", verifyUser, curtirVaga); 

// DESCURTIR VAGA
router.delete("/:id", verifyUser, descurtirVaga); 

// GET CURTIDA
router.get("/:user/:id", verifyUser, getCurtida); 

export default router;