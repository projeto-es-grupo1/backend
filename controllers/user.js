import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const updateUsername = async (req, res, next) => {
    try {
        const updatedUsername = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!updatedUsername) {
            return res.status(404).send("Usuário não encontrado");
        }

        res.status(200).send(updatedUsername);
    } catch (err) {
        next(err);
    }
}

export const updateUserPassword = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Atualize apenas a senha no documento
        const updatedUserPassword = await User.findByIdAndUpdate(
            req.params.id,
            { $set: { password: hash } }, // Atualize apenas a senha
            { new: true }
        );

        if (!updatedUserPassword) {
            return res.status(404).send("Usuário não encontrado");
        }

        res.status(200).send(updatedUserPassword);
    } catch (err) {
        next(err);
    }
}


export const deleteAccount = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(200).send("Usuário deletado!");
    } catch (err) {
        next(err);
    }
}
