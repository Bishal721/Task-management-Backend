const express = require("express");
const Task = require("../models/TaskModel");
const {
  CreateTask,
  GetAllTask,
  GetSingleTask,
  DeleteTask,
  UpdateTask,
} = require("../controllers/controller");
const router = express.Router();

// route for Create Task
router.post("/api/createtasks", CreateTask);

// Get all the Tasks
router.get("/api/gettasks", GetAllTask);

//Get Single Task
router.get("/api/gettask/:id", GetSingleTask);

// Delete Single Task
router.delete("/api/deletetask/:id", DeleteTask);

// Update a Task
router.put("/api/updatetask/:id", UpdateTask);

module.exports = router;
