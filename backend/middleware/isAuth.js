import jwt from "jsonwebtoken";
export const isAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ message: "user does not have toekn" });
    }
    let verifyToken = jwt.verify(token, process.env.JWT_SCRAETE);
    if (!verifyToken) {
      return res
        .status(400)
        .json({ message: "user does not have valid   toekn" });
    }

    req.userId = verifyToken.UserID;
    next();
  } catch (err) {
    console.log("error from isAuth", err);
    return res.status(500).json({ message: `is auth error ${err}` });
  }
};
