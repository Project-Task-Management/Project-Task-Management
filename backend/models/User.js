import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const schema = mongoose.Schema({
    vorname: {
        type: String,
        required: true,
      },
    nachname: {
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
      },
      rePassword: {
        type: String,
        required: true,
      },
  });
  const User = mongoose.model("User",schema)

  export const create = async (data) => {
    const result = await User.create(data)

    return result
}

export const getOne = async (filter) => {
    const result = await User.findOne(filter)
    return result
}

export const findOrCreate = async (data) => {
    const result = await User.findOneAndUpdate(
        {vorname: data.vorname}, 
        {nachname: data.nachname},
        {upsert: true})
    
    return result
}