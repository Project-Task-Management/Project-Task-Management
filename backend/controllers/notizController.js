import Notiz from "../models/Notiz.js"


export const getAll = async (req, res, next) => {
    try{
        const Notizs = await Notiz.getAll();
        res.status(200).json(Notizs)

    }catch(error){
        next(error)
    }
};

export const create = async ( req, res, next) => {
    const notiz = new Notiz(req.body)
    try{
        const erstellt = await notiz.save();
        res.status(201).json(erstellt)

    }catch(error){
        next(error)
    }
}


export const replace = async (req, res, next) => {
    try{
        const Notiz = await Notiz.replace(req.params.NotizId, req.body);
        res.status(201).json(Notiz)
        
    }catch(error){
        next(error)
    }
};


export const remove = async (req, res, next) => {
    try{
        const Notiz = await Notiz.delete(req.params.NotizId);
        res.status(204).send(Notiz)

    }catch(error){
        next(error)
    }
};


export const update = (req, res, next) => {
    try{
        Notiz.update(req.params.NotizId, req.body);
        res.status(201).json(Notiz)

    }catch(error){
        next(error)
    }
}