import { Env } from "@/env";
import jwt from "jsonwebtoken";

export const generateToken = (uuid: string): string => {
  const { secretKey, expiresIn } = Env;
  return `Bearer ${jwt.sign({ uuid }, secretKey || "express", { expiresIn })}`;
};
