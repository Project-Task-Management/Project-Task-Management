import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // {
  //   writeConcern: {
  //     j: true,
  //     wtimeout: 1000,
  //   },
  //}
);
const User = mongoose.model("User", schema);

export default User;
