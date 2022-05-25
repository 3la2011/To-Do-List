import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("task", TaskSchema);

export default Task;
