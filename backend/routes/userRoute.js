import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { getAdmin, getCurrentUser } from "../controller/userController.js";
import AdminAuth from "../middleware/AdminAuth.js";

const userRouter = express.Router();

userRouter.get("/getcurrentuser", isAuth, getCurrentUser);
userRouter.get("/getadmin", AdminAuth, getAdmin);

export default userRouter;
