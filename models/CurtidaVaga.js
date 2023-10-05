import mongoose from "mongoose";

const CurtidaVaga = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        lab: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    { timestamps: true }
); 

export default mongoose.model("CurtidaVaga", CurtidaVaga);