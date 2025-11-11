import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import ProductRoute from "./routes/productRoute.js";
import CartRouter from "./routes/cartRoutes.js";
import orderRoute from "./routes/orderRoute.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://onecart-ecommerce.onrender.com", "https://onecart-ecommerceadminn.onrender.com"],
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", ProductRoute);
app.use("/api/cart", CartRouter);
app.use("/api/order", orderRoute);
app.listen(PORT, () => {
  console.log(`app is running on  http://localhost:${PORT}`);
  ConnectDb();
});
