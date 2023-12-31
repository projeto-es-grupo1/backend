import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/Error.js";
import PerfilUser from "../models/PerfilUser.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = await User.findOne({ username: req.body.username });

    if (user) return next(createError(400, "Username Aleady in use!"));

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    const userPerfil = new PerfilUser({
      user: newUser._id,
      nome : req.body.username,
      email : "",
      telefone : "",
      maior_de_idade : true,
      habilidades : [],
      interesses : [],
      disponibilidade_remoto: true,
      disponibilidade_presencial: true,
      motivacao: "",
      focando_em: []
    });

    await newUser.save().then(
      await userPerfil.save()
    );
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isLab: user.isLab },
      process.env.JWT
    );

    console.log(token);

    const { password, isLab, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({token, details: { ...otherDetails }, isLab});
      
      
  } catch (err) {
    next(err);
  }
};