import CandidaturaVaga from "../models/CandidaturaVaga";
import Vaga from "../models/Vaga";

export const createVagaLab = async (req, res, next) => {
    try {
        const newVaga = new Vaga({
            ...req.body
        });
  
        await Vaga.save();
        res.status(200).send(newVaga);
    } catch (err) {
        next(createError(400, "Erro ao criar vaga!"));
    }
};


export const updateVagaLab = async (req, res, next) => {
    try {
        const updateVagaLab = await Vaga.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!updateVagaLab) {
            return res.status(404).send("Vaga não encontrada!");
        }

        res.status(200).send(updateVagaLab);
    } catch (err) {
        next(err);
    }
}


export const deleteVagaLab = async (req, res , next) => {
    try {
        await Vaga.findByIdAndDelete(req.params.id);

        await CandidaturaVaga.deleteMany({ lab: req.params.id });

        res.status(200).json("Vaga foi deletada!")
    } catch (err) {
        next(err);
    }
}

export const getVagaLab = async (req, res, next) => {
    try {
        const vagasLab = await Vaga.find({ "user": req.params.lab, "id": req.params.id }).lean();

        res.status(200).json(vagasLab);
    } catch (err) {
        next(err);
    }
};

export const getVagasLab = async (req, res, next) => {
    try {
        const vagaLab = await Vaga.find({ "user": req.params.lab }).lean();

        res.status(200).json(vagaLab);
    } catch (err) {
        next(err);
    }
};