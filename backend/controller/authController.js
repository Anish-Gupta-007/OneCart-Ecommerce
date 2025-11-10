import user from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import { gentoken, gentoken1 } from "../config/token.js";
import { json } from "express";
export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "user already exist" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "enter valid Email" });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "enter strong password" });
    }
    const hasedPassword = await bcrypt.hash(password, 10);

    let User = await userModel.create({ name, email, password: hasedPassword });
    let token = await gentoken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json(User);
  } catch (err) {
    console.log("eror from register", err);
    return res.status(500).json({ message: `register error ${err}` });
  }
};

export const Login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User is not Found" });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ message: "incorrect password" });
    }
    let token = await gentoken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({ message: "login succesfully" }, user);
  } catch (err) {
    console.log("error on login", err);
    return res.status(500).json({ message: `login error ${err}` });
  }
};

export const LogOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "logOut succesfull" });
  } catch (err) {
    console.log("error in logout", err);
    return res.status(500).json({ message: `register error ${err}` });
  }
};

export const googleLogin = async (req, res) => {
  try {
    const { name, email } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
      user = await userModel.create({ name, email });
      console.log("new user craeted");
    }
    let token = await gentoken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({ message: "google login succesfull ", user });
  } catch (err) {
    console.log("google login error", err);
    return res.status(500).json({ message: `google  login error ${err}` });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      let token = await gentoken1(email);
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        maxAge: 1 * 24 * 60 * 60 * 1000,
      });
      return res
        .status(200)
        .json({ message: "google login succesfull ", token });
    }
    return res.status(400).json({ message: "invalid creadintials" });
  } catch (err) {
    console.log("Admin login error", err);
    return res.status(500).json({ message: `Admin  login error ${err}` });
  }
};
