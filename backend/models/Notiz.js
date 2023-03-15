import mongoose from "mongoose";

const schema = new mongoose.Schema({
    headline: {
        teyp: String
    },

    text: {
        teyp: String
    }
})


const Notiz = mongoose.model("Notiz", schema)


export const getAll = async () => {
    try{
        const notiz = await Notiz.find()
        return notiz
    }catch(error){
        console.error(error)
    }
}


export const create = async (headline, text) => {
    const newUsers = new Notiz({headline, text});

    const result = await newUsers.save();
    return result;
}
export default Notiz