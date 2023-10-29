import express from "express";
import { verifyUser } from "../utils/VerifyToken.js";
import { curtirVaga, descurtirVaga, getCurtida, getCurtidas } from "../controllers/curtida.js";

const router = express.Router();

// CURTIR VAGA
router.post("", curtirVaga); 

// DESCURTIR VAGA
router.delete("/:id", descurtirVaga); 

// GET CURTIDA
router.get("/:user/:id", getCurtida); 

router.get("/:id", getCurtidas); 

export default router;