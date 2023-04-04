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
    try{
     const newUsers = new Notiz({headline, text});
     const result = await newUsers.save();
        console.log({newUsers,result})
        return result;
    }catch{
        
    }
  
 }

export const deleteOneNotiz = async(id)=>{
try {
    const notiz = await Notiz.deleteOne({_id:id});
    console.log(req.params.id);
    return notiz
} catch (error) {
    
}
}
export const update = async (id,headline,text) => {
    try{
        const notizupdate = await Notiz.findById(id);
      notizupdate.headline=headline
      notizupdate.text=text

      return notizupdate.save()
       
    }catch(error){
        console.error(error)
    }
}



export default Notiz