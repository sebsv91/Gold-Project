import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) res.status(401).json({ message: "No token, Authorized denied" });

  jwt.verify(token, SECRET_TOKEN, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });

    req.user = user;
  });
  next();
};
