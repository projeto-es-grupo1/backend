import ComentarioVaga from "../models/ComentarioVaga.js";

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

export const deleteComentarioVaga = async (req, res , next) => {
    try {
        await ComentarioVaga.findByIdAndDelete(req.params.id);
        res.status(200).json("Comentário foi deletado!")
    } catch (err) {
        next(createError(400, "Comentário não existe ou já foi deletado!"));
    }
}

export const getCometariosVaga = async (req, res, next) => {
    try {
        const Comentariosvagas = await ComentarioVaga.find({ "LabVaga": req.params.id_vaga }).lean();

        res.status(200).json(Comentariosvagas);
    } catch (err) {
        next(err);
    }
};