import mongoose from "mongoose";

const CertificadoUser = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        link_certificado: {
            type: String,
            required: true,
        },
        titulo: {
            type: String,
            required: true
        },
        area: {
            type: String,
            required: true
        },
        duracao: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
); 

export default mongoose.model("CertificadoUser", CertificadoUser);