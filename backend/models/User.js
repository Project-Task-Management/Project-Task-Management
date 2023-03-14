import { text } from "express";
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    headline: {
        teyp: String
    },

    text: {
        teyp: String
    }
})


const user = mongoose.model("user", schema)


export const getAll = async () => {
    try{
        const users = await user.find()
        return users
    }catch(error){
        console.error(error)
    }
}


export const create = async (headline, text) => {
    const newUsers = new user({headline, text});

    const result = await newUsers.save();
    return result;
}