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
        const result = await Notiz.create(req.body.headline, req.body.text)
        res.status(201).json(result)
        

    }catch(error){
        next(error)
    }
}


export const remove = async (req, res, next) => {
    try{
        const result= await Notiz.deleteOneNotiz(req.params.id)
        res.status(201).json(result)
        

    }catch(error){
        next(error)
    }
};

export const updateOne = async (req, res, next) => {
    const {id}=req.params
    const {headline,text}=req.body

    try{
        const result = await Notiz.update(id,headline,text)
        res.status(201).json(result)
        console.log(result)
    }catch(error){
      next(error)
    }
}
