import * as model from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      userName,
      email,
      password: hashedPassword,
    });
    await user.save();

    const token = jwt.sign({ email }, "secret_key");
   
    res.status(201).json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
