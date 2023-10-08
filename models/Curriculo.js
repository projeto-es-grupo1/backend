import mongoose from "mongoose";

const CurriculoUser = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            unique: true,
            required: true,
        },
        link_curriculo: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
); 

export default mongoose.model("CurriculoUser", CurriculoUser);