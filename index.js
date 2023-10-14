import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoute from "./routes/auth.js";
import certificadoRoute from "./routes/certificadoUser.js";
import curriculoRoute from "./routes/curriculo.js";
import perfilRoute from "./routes/perfilUser.js";
import userRoute from "./routes/user.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongo DB!!!");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () =>{
    console.log("Mongo DB disconnected!!!");
});


// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Rotas Aqui
app.use("/api/auth", authRoute);
app.use("/api/certificados", certificadoRoute);
app.use("/api/curriculos", curriculoRoute);
app.use("/api/perfil", perfilRoute);
app.use("/api/user", userRoute);

/*
Candidatura
Vaga
    Comentario
    Curtida
User => falta o delete: Depende de todas as rotas funcionando
*/

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
});