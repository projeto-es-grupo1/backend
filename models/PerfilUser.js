import mongoose from "mongoose";

const PerfilUser = new mongoose.Schema(
    {
        lab: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        nome : {
            type: String,
            required: true,
        },
        email : {
            type: String,
            required: true,
        },
        telefone : {
            type: String,
            required: true,
        },
        maior_de_idade : {
            type: Boolean,
            required: true,
        },
        habilidades : {
            type: [String],
            required: true,
        },
        interesses : {
            type: [String],
            required: false,
        },
        disponibilidade_remoto: {
            type: Boolean,
            required: true
        },
        disponibilidade_presencial: {
            type: Boolean,
            required: true
        },
        motivacao: {
            type: String,
            required: true
        },
        focando_em: {
            type: [String],
            required: true
        }
    },
    { timestamps: true }
); 

export default mongoose.model("PerfilUser", PerfilUser);