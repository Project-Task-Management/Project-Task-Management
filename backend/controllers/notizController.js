import * as User from "../models/User.js"


export const getAll = async (req, res, next) => {
    try{
        const users = await User.getAll();
        res.status(200).json(users)

    }catch(error){
        next(error)
    }
};

export const create = async ( req, res, next) => {
    try{
        const user = await User.create(req.body.headline, req.body.text);
        res.status(201).json(user)

    }catch(error){
        next(error)
    }
}


export const replace = async (req, res, next) => {
    try{
        const user = await User.replace(req.params.userId, req.body);
        res.status(201).json(user)
        
    }catch(error){
        next(error)
    }
};


export const remove = async (req, res, next) => {
    try{
        const user = await User.delete(req.params.userId);
        res.status(204).send(user)

    }catch(error){
        next(error)
    }
};


export const update = (req, res, next) => {
    try{
        User.update(req.params.userId, req.body);
        res.status(201).json(User)

    }catch(error){
        next(error)
    }
}