import mongoose from "mongoose";

const schema = new mongoose.Schema({
    headline: {
       type: String
    },

    text: {
        type: String
    }
},
{ 
    writeConcern: { 
        j: true,
        wtimeout: 1000, 
    }, } 

)
 


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
export const deleteOneNotiz = async(id)=>{
try {
    const notiz = await Notiz.deleteOne({_id:id});
    console.log(req.params.id);
    return notiz
} catch (error) {
    
}
}

export default Notiz