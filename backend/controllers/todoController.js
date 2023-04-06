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
    console.log(createdTodo);
    try{
        const todo = await createdTodo.save()
        res.status(201).json(todo)
        console.log("hallo maroco createTodo");
    }catch(error){
        console.error(error);
        res.status(400).send()
    }
}

export const deleteOneTodo=async (req,res)=>{
    console.log("hi");
    try{
        console.log(req.params.id);
        const deletTodo = await Todo.findByIdAndDelete(req.params.id)
        console.log(deletTodo);
        
        res.status(201).json(deletTodo)
    }catch{

    }
}
