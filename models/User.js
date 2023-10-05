import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required: true,
        },
        password : {
            type: String,
            required: true,
        },
        isLab: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
); 

export default mongoose.model("User", UserSchema);