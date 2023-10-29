import CurtidaVaga from "../models/CurtidaVaga.js";

export const curtirVaga = async (req, res, next) => {
    try {
        const curtida = new CurtidaVaga({
            ...req.body
        });
  
        await curtida.save();
        res.status(200).send(curtida);
    } catch (err) {
      next(err);
    }
};

export const descurtirVaga = async (req, res , next) => {
    try {
        await CurtidaVaga.findByIdAndDelete(req.params.id);
        res.status(200).json("Vaga foi descurtida!")
    } catch (err) {
        next(err);
    }
}

export const getCurtida = async (req, res, next) => {
    try {
        const curtida = await CurtidaVaga.find({ "user": req.params.user, "labVaga": req.params.id }).lean();

        res.status(200).json(curtida);
    } catch (err) {
        next(err);
    }
};

export const getCurtidas = async (req, res, next) => {
    try {
        const curtida = await CurtidaVaga.find({ "labVaga": req.params.id }).lean();

        res.status(200).json(curtida);
    } catch (err) {
        next(err);
    }
};