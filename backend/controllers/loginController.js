import User from "../models/User.js";
import bcrypt from "bcrypt";
export const compareUser = async (req, res) => {
  try {
    const { email, password } = req.body.loginData;

    const user = await User.findOne({ email: email });
    console.log(user);
    console.log(email);
    console.log(password);
    console.log(req.body);

    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        res.json({ success: true, user: user });
        res.status(200);
      } else {
        res.json({ success: false, message: "Incorrect password" });
        res.status(401);
      }
    } else {
      res.json({ success: false, message: "User not found" });
      res.status(404);
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error occurred" });
  }
};
