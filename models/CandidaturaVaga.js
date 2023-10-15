import mongoose from "mongoose";

const CandidaturaVaga = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        vaga: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LabVaga",
            required: true,
        }
    },
    { timestamps: true }
); 

CandidaturaVaga.index({ user: 1, vaga: 1 }, { unique: true });

export default mongoose.model("CandidaturaVaga", CandidaturaVaga);