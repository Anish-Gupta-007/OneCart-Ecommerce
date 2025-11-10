import express from "express";
import {
  adminLogin,
  googleLogin,
  Login,
  LogOut,
  Register,
} from "../controller/authController.js";
const authRouter = express.Router();

authRouter.post("/registraion", Register);
authRouter.post("/login", Login);
authRouter.get("/logout", LogOut);
authRouter.post("/googlelogin", googleLogin);
authRouter.post("/adminlogin", adminLogin);

export default authRouter;
