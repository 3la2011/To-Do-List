// Libraries and Packages
import express from "express";
import dotenv from "dotenv/config";
import bcrypt from "bcrypt";
import Token from "jsonwebtoken";
import { validationResult } from "express-validator";

// Data-Base Models/Collections
import User from "../models/userSchema.js";

// Models
import Task from "../models/taskSchema.js";

//  Middleware
import { loginValidate, signupValidate } from "../middleware/validation.js";
import { authenticateUser } from "../middleware/authenticateUser.js";

// Express Routes
const router = express.Router();
const error = 401;

//Routes
router.get("/", async (req, res) => {
  const user = await User.findOne({ _id: req.body.id });
  return res.send({ tasks: user.tasks });
});

router.get("/add", async (req, res) => {
  const id = req.body.id;
  const user = await User.findOne({ _id: id });
  user.tasks.push(
    new Task({
      title: "task",
      description: "task description",
    })
  );
  user
    .save()
    .then(async () => {
      res.status(200).send({ tasks: user.tasks });
    })
    .catch((err) => {
      res.status(error).send({
        error: "couldn't add new task, please try again later",
      });
    });
});

router.put("/update", async (req, res) => {
  const userId = req.body.id;
  const taskId = req.body.taskId;
  const title = req.body.title;
  const description = req.body.description;

  const user = await User.findOne({ _id: userId });
  user.tasks.map((elem) =>
    elem._id == taskId
      ? ((elem.title = title), (elem.description = description))
      : ""
  );

  user
    .save()
    .then(() => {
      res.status(200).send({ tasks: user.tasks });
    })
    .catch((err) => {
      res.status(error).send({
        error: "couldn't add update task, please try again later",
      });
    });
});

router.delete("/delete/:taskId", async (req, res) => {
  const userId = req.body.id;
  const taskId = req.params.taskId;
  console.log(taskId);
  const user = await User.findOne({ _id: userId });
  const tasks = user.tasks.filter((elem) => elem._id != taskId);
  user.tasks = [...tasks];
  user
    .save()
    .then(() => {
      res.status(200).send({ tasks: user.tasks });
    })
    .catch((err) => {
      res.status(error).send({
        error: "couldn't delete the task, please try again later",
      });
    });
});

export default router;
