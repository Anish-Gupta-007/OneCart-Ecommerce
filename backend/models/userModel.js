import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true, minimize: false }
);

const user = mongoose.model("userSchema", UserSchema);
export default user;
