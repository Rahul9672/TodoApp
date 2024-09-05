const Todos = require("../models/Todos");

exports.createTodos = async(req,res) => {
    try{
        // extract title and description from request body
        const{title,description} = req.body;
        const response = await Todos.create({title,description});

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created successfully"
            }
        );

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}