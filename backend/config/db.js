import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected");
  } catch (err) {
    console.log("error while connecting to mongodb", err);
  }
};
export default ConnectDb;
