import { createError } from "../utils/Error.js";
import Curriculo from "../models/Curriculo.js";

export const createCurriculo = async (req, res, next) => {
    try {
        const curriculo = await Curriculo.find({"user": req.params.user});

        if (curriculo) return next(createError(400, "Apenas um currículo por usuário!"));

        const newCurriculo = new Curriculo({
            ...req.body
        });
  
        await newCurriculo.save();
        res.status(200).send(newCurriculo);
    } catch (err) {
      next(err);
    }
};

export const updateCurriculoUser = async (req, res, next) => {
    try {
        const existsCurriculo = await Curriculo.find({"user": req.params.user, "_id": req.params._id});
        if (!existsCurriculo) return next(createError(400, "Este currículo não existe para esse usuário!"));

        const updateCurriculoUser = await Curriculo.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).send(updateCurriculoUser);
    } catch (err) {
        next(err);
    }
}

export const deleteCurriculoUser = async (req, res , next) => {
    try {
        await Curriculo.findByIdAndDelete(req.params.id);
        res.status(200).json("Curriculo has been deleted!")
    } catch (err) {
        next(err);
    }
}

export const getCurriculoUser = async (req, res, next) => {
    try {
        const curriculo = await Curriculo.find({"user": req.params.user, "_id": req.params.id}).lean();
        res.status(200).json(curriculo);
    } catch (err) {
        next(err);
    }
};