import mongoose from "mongoose";

const PerfilUser = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },
        nome : {
            type: String,
            required: false,
        },
        email : {
            type: String,
            required: false,
        },
        telefone : {
            type: String,
            required: false,
        },
        maior_de_idade : {
            type: Boolean,
            required: false,
        },
        habilidades : {
            type: [String],
            required: false,
        },
        interesses : {
            type: [String],
            required: false,
        },
        disponibilidade_remoto: {
            type: Boolean,
            required: false
        },
        disponibilidade_presencial: {
            type: Boolean,
            required: false
        },
        motivacao: {
            type: String,
            required: false
        },
        focando_em: {
            type: [String],
            required: false
        }
    },
    { timestamps: true }
); 

export default mongoose.model("PerfilUser", PerfilUser);