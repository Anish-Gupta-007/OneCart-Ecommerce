import jwt from "jsonwebtoken";

export const gentoken = async (UserID) => {
  try {
    let token = await jwt.sign({ UserID }, process.env.JWT_SCRAETE, {
      expiresIn: "7d",
    });
    return token;
  } catch (err) {
    console.log("token err", err);
  }
};
export const gentoken1 = async (email) => {
  try {
    let token = await jwt.sign({ email }, process.env.JWT_SCRAETE, {
      expiresIn: "7d",
    });
    return token;
  } catch (err) {
    console.log("token err", err);
  }
};
