import mongoose from "mongoose";

const ComentarioUser = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        LabVaga: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LabVaga",
            required: true,
        },
        titulo: {
            type: String,
            required: true
        },
        assunto: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
); 

export default mongoose.model("ComentarioUser", ComentarioUser);