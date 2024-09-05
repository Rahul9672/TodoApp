const express = require('express');
const app = express();

// load config from env file
require('dotenv').config();

const PORT = process.env.PORT || 4000;

// middleware to perse json request body 
app.use(express.json());

// import routes for todos api
const todosRoutes = require("./routes/todos");


// mount the todos api routes

app.use("api/v1", todosRoutes); 

// start server
app.listen(PORT , () => {
    console.log(`Server started successfully at ${PORT}`); 
})

// CONNECT TO DB

const dbConnect = require("./config/database");
dbConnect();

// default router

app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE baby </h1>`);
})