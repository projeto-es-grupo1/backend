import CandidaturaVaga from "../models/CandidaturaVaga.js";
import PerfilUser from "../models/PerfilUser.js";
import Vaga from "../models/Vaga.js";
import { createError } from "../utils/Error.js";

export const createCandidatura = async (req, res, next) => {
    try {
        const newCandidatura = new CandidaturaVaga({
            ...req.body
        });
  
        await newCandidatura.save();
        res.status(200).send(newCandidatura);
    } catch (err) {
        next(createError(400, "Algo deu errado :("));
    }
};

export const deleteCandidatura = async (req, res , next) => {
    try {
        await CandidaturaVaga.findByIdAndDelete(req.params.id);
        res.status(200).json("Candidatura foi deleteda!")
    } catch (err) {
        next(err);
    }
}

export const getCandidatura = async (req, res, next) => {
    try {
        const candidatura = await CandidaturaVaga.find({"vaga": req.params.vaga, "_id": req.params.id}).lean();
        res.status(200).json(candidatura);
    } catch (err) {
        next(err);
    }
};

export const getCandidaturas = async (req, res, next) => {
    try {
        const candidaturas = await CandidaturaVaga.find({"vaga": req.params.vaga}).lean();
        res.status(200).json(candidaturas);
    } catch (err) {
        next(err);
    }
};
export const getCandidaturasOrdenadas = async (req, res, next) => {
    try {
        const vaga = await Vaga.findById(req.params.vaga);

        if (!vaga) {
            return res.status(404).json({ message: "Vaga não encontrada" });
        }

        const candidaturas = await CandidaturaVaga.find({ "vaga": req.params.vaga }).lean();

        const candidaturasOrdenadas = [];

        for (const candidatura of candidaturas) {
            const perfilUser = await PerfilUser.findOne({ "user": candidatura.user });

            if (!perfilUser) {
                continue; // Se o perfil do usuário não existe, vá para o próximo candidato.
            }

            let pontuacao = 0;

            // Verifique cada campo no perfil do usuário
            for (const campo in perfilUser) {
                if (perfilUser[campo] !== null && perfilUser[campo] !== '') {
                    pontuacao += 1;
                }
            }

            // Verifique as habilidades do perfil do usuário em relação às habilidades requeridas da vaga
            for (const habilidadeRequerida of vaga.habilidades_requeridas) {
                if (
                    perfilUser.habilidades &&
                    perfilUser.habilidades.includes(habilidadeRequerida)
                ) {
                    pontuacao += 2;
                }
            }

            // Adicione 4 pontos se disponibilidade_remoto ou disponibilidade_presencial forem true
            if (perfilUser.disponibilidade_remoto === true) {
                pontuacao += 4;
            }
            if (perfilUser.disponibilidade_presencial === true) {
                pontuacao += 4;
            }

            // Adicione 3 pontos para cada elemento em perfil.focando_em que está presente em vaga.habilidades_requeridas
            if (perfilUser.focando_em && Array.isArray(perfilUser.focando_em)) {
                for (const foco in perfilUser.focando_em) {
                    if (
                        perfilUser.focando_em[foco] &&
                        vaga.habilidades_requeridas.includes(perfilUser.focando_em[foco])
                    ) {
                        pontuacao += 3;
                    }
                }
            }

            // Adicione 3 pontos para cada elemento em perfil.focando_em que está presente em vaga.habilidades_sugeridas
            if (perfilUser.focando_em && Array.isArray(perfilUser.focando_em)) {
                for (const foco in perfilUser.focando_em) {
                    if (
                        perfilUser.focando_em[foco] &&
                        vaga.habilidades_sugeridas.includes(perfilUser.focando_em[foco])
                    ) {
                        pontuacao += 2;
                    }
                }
            }

            candidaturasOrdenadas.push({ candidatura, pontuacao });
        }

        // Classifique as candidaturas com base na pontuação (do melhor para o pior)
        candidaturasOrdenadas.sort((a, b) => b.pontuacao - a.pontuacao);

        // Retorne apenas as candidaturas (sem as pontuações)
        const candidaturasOrdenadasSemPontuacao = candidaturasOrdenadas.map(
            (item) => item.candidatura
        );

        res.status(200).json(candidaturasOrdenadasSemPontuacao);
    } catch (err) {
        next(err);
    }
};
