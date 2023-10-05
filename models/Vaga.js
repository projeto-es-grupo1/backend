import mongoose from "mongoose";

const LabVaga = new mongoose.Schema(
    {
        lab: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        titulo : {
            type: String,
            required: true,
        },
        descricao : {
            type: String,
            required: true,
        },
        localizacao : {
            type: String,
            required: true,
        },
        data_expiracao : {
            type: Date,
            required: true,
        },
        habilidades_requeridas : {
            type: [String],
            required: true,
        },
        habilidades_sugeridas : {
            type: [String],
            required: false,
        },
        qtd_vagas: {
            type: Number,
            required: true
        },
        area: {
            type: String,
            required: true
        },
        bolsa: {
            type: Number,
            required: true
        },
        carga_horaria: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
); 

export default mongoose.model("LabVaga", LabVaga);