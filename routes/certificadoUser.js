import express from "express";
import { verifyUser } from "../utils/VerifyToken.js";
import { createCertificadoUser, deleteCertificadoUser, getAllCertificadoUser, getCertificadoUser, updateCertificadoUser } from "../controllers/certificado.js";

const router = express.Router();

// DELETE CERTIFICADO
router.delete("/:id", verifyUser, deleteCertificadoUser); 

// UPDATE CERTIFICADO
router.put("/:id", verifyUser, updateCertificadoUser); 

// CREATE CERTIFICADO
router.post("/:user", verifyUser, createCertificadoUser);

// GET CERTIFICADO
router.get("/:user/:id", verifyUser, getCertificadoUser);

// GET ALL CERTIFICADOS
router.get("/:user", verifyUser, getAllCertificadoUser);

export default router;