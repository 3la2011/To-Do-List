import mongoose from "mongoose";
import { TaskSchema } from "./taskSchema.js";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [TaskSchema],
});

const User = mongoose.model("User", UserSchema);

export default User;
