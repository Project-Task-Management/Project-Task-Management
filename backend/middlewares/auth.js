import { verifyToken } from "../lib/token.js";

export const loggedIn = (req, res, next) => {
  const token = req.cookies.loggedIn;

  try {
    const verifiedUser = verifyToken(token);
    res.redirect("/");
  } catch (err) {
    next();
  }
};
