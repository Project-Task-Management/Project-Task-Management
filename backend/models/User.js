import mongoose from "mongoose";
const schema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      }
  });
  const User = mongoose.model("User",schema);

export default User