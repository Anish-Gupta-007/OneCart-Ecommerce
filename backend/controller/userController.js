import userModel from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
  try {
    let user = await userModel.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "user Not found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    console.log("error from getCurrent user", err);
    return res.status(500).json({ message: `get current user error ${err}` });
  }
};

export const getAdmin = async (req, res) => {
  try {
    let adminEmail = req.adminEmail;
    if (!adminEmail) {
      return res.status(404).json({ message: " admin is not Found" });
    }
    return res.status(201).json({ email: adminEmail, role: "admin" });
  } catch (err) {
    console.log("error on ", err);
    return res.status(500).json({ message: `get admin error ${err}` });
  }
};
