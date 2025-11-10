import jwt from "jsonwebtoken";

const AdminAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      res.status(400).json({ message: "you dont have token" });
    }
    let verifyToken = jwt.verify(token, process.env.JWT_SCRAETE);
    if (!verifyToken) {
      return res.status({ message: "not autharized verifytoken" });
    }
    req.adminEmail = process.env.ADMIN_EMAIL;
    next();
  } catch (err) {
    console.log("admin auth error", err);
    return res.status(500).json({ message: `admin auth error ${err}` });
  }
};

export default AdminAuth;
