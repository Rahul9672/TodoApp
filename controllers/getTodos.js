const Todos = require("../models/Todos");

exports.getTodos = async(req,res) => {
    try{
        // fetch all todo data from database

        const todo = await Todos.find({});
        // response
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"entire todos data is fetched",
        });
        

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server error",
        });
        
    }
}