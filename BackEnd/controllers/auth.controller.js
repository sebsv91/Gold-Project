import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config.js";

export const register = async (req, res) => {
  const { username, phone, email, password } = req.body;
  try {
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json(["El nombre de usuario ya está en uso"]);
    }

    const phoneExists = await User.findOne({ phone });
    if (phoneExists) {
      return res.status(400).json(["El número de teléfono ya está en uso"]);
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json(["El correo electrónico ya está en uso"]);
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      phone,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      phone: userSaved.phone,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(400).json({ message: ["Credenciales invalidas"] });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ message: ["Credenciales invalidas"] });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token, {
      /*  httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24,
      */
    });

    res.json({
      id: userFound._id,
      username: userFound.username,
      phone: userFound.phone,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  return res.sendStatus(200);
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, SECRET_TOKEN, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await User.findById(user.id);

    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};

export const profile = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({ message: "User not found" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
