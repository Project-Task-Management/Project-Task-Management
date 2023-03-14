import Todo from "../models/Todo.js";

export const getAllTodos =async (req,res)=>{
    try{
      const todos= await Todo.find()
      res.json(todos)
    }catch{

    }
}
export const getOneTodo=async (req,res)=>{
    try{
        const findTodo = await Todo.findById(req.params.id)
        res.send(findTodo)
        console.log("hallo maroco OneTodo");
    }catch{

    }
}
export const createTodo=async (req,res)=>{
    const createdTodo=new Todo(req.body)
    try{
        const todo = await createdTodo.save()
        res.status(201).json(todo)
        console.log("hallo maroco createTodo");
    }catch{

    }
}
export const updateTodo=async (req,res)=>{
    console.log("hallo maroco updateTodo");
}
export const deleteOneTodo=async (req,res)=>{
    try{
        const deletTodo = await Todo.findByIdAndDelete(req.params.id)
        res.send(deletTodo)
        console.log("hallo maroco deleteOneTodo");
    }catch{

    }
}