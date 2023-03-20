import * as Notiz from "../models/Notiz.js"

export const getAllNotiz = async (req, res, next) => {
    try{
       const result = await Notiz.getAll()
      res.status(200).json(result)

    }catch(error){
        next(error)
    }
};

export const create = async ( req, res, next) => {
    try{
        const result = await Notiz.create()
        res.status(201).json(result)

    }catch(error){
        next(error)
    }
}


// export const replace = async (req, res, next) => {
//     try{
//         const notiz = await Notiz.replace(req.params.NotizId, req.body);
//         res.status(201).json(notiz)
        
//     }catch(error){
//         next(error)
//     }
// };


export const remove = async (req, res, next) => {
    try{
        const result= await Notiz.deleteOneNotiz(req.params.id)
        res.status(201).json(result)
        

    }catch(error){
        next(error)
    }
};


// export const update = (req, res, next) => {
//     try{
//         Notiz.update(req.params.NotizId, req.body);
//         res.status(201).json(Notiz)

//     }catch(error){
//         next(error)
//     }
// }