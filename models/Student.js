import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  course: {
    type: String,
  },
  dateRegistered: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Student", studentSchema);
