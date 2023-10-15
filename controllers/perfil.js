import PerfilUser from "../models/PerfilUser.js";

export const createPerfilUser = async (req, res, next) => {
    try {
        const newPerfil = new PerfilUser({
            ...req.body
        });
  
        await newPerfil.save();
        res.status(200).send(newPerfil);
    } catch (err) {
      next(err);
    }
};

export const updatePerfilUser = async (req, res, next) => {
    try {
        const updatedPerfilUser = await PerfilUser.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: false }
        );

        if (!updatedPerfilUser) {
            return res.status(404).send("perfil de usuário não encontrado");
        }

        res.status(200).send(updatedPerfilUser);
    } catch (err) {
        next(err);
    }
}

export const deletePerfilUser = async (req, res , next) => {
    try {
        await PerfilUser.findByIdAndDelete(req.params.id);
        res.status(200).json("Perfil foi deletado!")
    } catch (err) {
        next(err);
    }
}

export const getPerfilUser = async (req, res, next) => {
    try {
        const perfilUser = await PerfilUser.find({ "user": req.params.user }).lean();

        res.status(200).json(perfilUser);
    } catch (err) {
        next(err);
    }
};
