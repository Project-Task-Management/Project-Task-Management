import mongoose from "mongoose";
const schema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    tasks:{
        type:String,
        required:true,
    }
})

const Todo =mongoose.model("Todo",schema)

export default Todo