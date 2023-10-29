import express from "express";
import { verifyUser } from "../utils/VerifyToken.js";
import { createCertificadoUser, deleteCertificadoUser, getAllCertificadoUser, getCertificadoUser, updateCertificadoUser } from "../controllers/certificado.js";

const router = express.Router();

// DELETE CERTIFICADO
router.delete("/:id", deleteCertificadoUser); 

// UPDATE CERTIFICADO
router.put("/:id", updateCertificadoUser); 

// CREATE CERTIFICADO
router.post("/:user", createCertificadoUser);

// GET CERTIFICADO
router.get("/:user/:id", getCertificadoUser);

// GET ALL CERTIFICADOS
router.get("/:user", getAllCertificadoUser);

export default router;