import CertificadoUser from "../models/CertificadoUser.js";

export const createCertificadoUser = async (req, res, next) => {
    try {
        const newCertificado = new CertificadoUser({
            ...req.body
        });
  
        await newCertificado.save();
        res.status(200).send(newCertificado);
    } catch (err) {
      next(err);
    }
};

export const updateCertificadoUser = async (req, res, next) => {
    try {
        const updatedCertificadoUser = await CertificadoUser.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!updatedCertificadoUser) {
            return res.status(404).send("CertificadoUser não encontrado");
        }

        res.status(200).send(updatedCertificadoUser);
    } catch (err) {
        next(err);
    }
}


export const deleteCertificadoUser = async (req, res , next) => {
    try {
        await CertificadoUser.findByIdAndDelete(req.params.id);
        res.status(200).json("Certificado has been deleted!")
    } catch (err) {
        next(err);
    }
}

export const getCertificadoUser = async (req, res, next) => {
    try {
        const certificado = await CertificadoUser.findById(req.params.id).lean();

        res.status(200).json(certificado);
    } catch (err) {
        next(err);
    }
};

export const getAllCertificadoUser = async (req, res, next) => {
    try {
        const certificados = await CertificadoUser.find({"user": req.params.user}).lean();
        res.status(200).json(certificados);
    } catch (err) {
        next(err);
    }
};