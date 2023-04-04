import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
        const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
        res.json({ success: true, user: user, token });
        res.status(200);
        res.cookie("jwt", token, {
          sameSite: "lax",
          maxAge: process.env.MAXAGE_COOKIE,
          httpOnly: true,
        });
        res.cookie("loggedIn", user._id.toString(), {
          sameSite: "lax",
          maxAge: process.env.MAXAGE_COOKIE,
          httpOnly: false,
        });
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
