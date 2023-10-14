import ComentarioVaga from "../models/ComentarioVaga";

export const createComentarioVaga = async (req, res, next) => {
    try {
        const newComentario = new ComentarioVaga({
            ...req.body
        });
  
        await newComentario.save();
        res.status(200).send(newComentario);
    } catch (err) {
        next(createError(400, "Erro ao criar Comentário!"));
    }
};

export const updateComentarioVaga = async (req, res, next) => {
    try {
        const updateComentarioVaga = await ComentarioVaga.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!updateComentarioVaga) {
            return res.status(404).send("Comentário não encontrado!");
        }

        res.status(200).send(updateComentarioVaga);
    } catch (err) {
        next(err);
    }
}

export const deleteVagaLab = async (req, res , next) => {
    try {
        const vaga = await Vaga.findById(req.params.id);

        if (vaga) {
            await Vaga.findByIdAndDelete(req.params.id);

            await CandidaturaVaga.deleteMany({ lab: req.params.lab });

            res.status(200).json("Vaga foi deletada!")
        } else {
            next(createError(400, "Vaga não existe ou já foi deletada!"));
        }
    } catch (err) {
        next(err);
    }
}

export const getVagasLab = async (req, res, next) => {
    try {
        const vagasLab = await Vaga.find({ "lab": req.params.lab }).lean();

        res.status(200).json(vagasLab);
    } catch (err) {
        next(err);
    }
};