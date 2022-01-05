const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please add a company"],
      minlength: [3, "Company must be at least 3 characters long"],
    },
    position: {
      type: String,
      required: [true, "Please add a position"],
      minlength: [3, "Position must be at least 3 characters long"],
    },
    status: {
      type: String,
      enum: ["Applied", "Interviewing", "Rejected"],
      default: "Applied",
    },
    createBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
