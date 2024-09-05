const express = require('express');
const router = express.Router();

// import controller
const {createTodos} = require("../controllers/createTodos");
const {getTodos} = require("../controllers/getTodos");

// define api routes
router.post("/createTodos", createTodos);
router.get("/getTodos", getTodos);

module.exports = router;