const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    configuration: { type: String },
  },
  {
    timestamps: true,
  }
);

// Fix: Avoid model overwrite error in dev (especially with Fast Refresh)
module.exports =
  mongoose.models.showcasetemplates ||
  mongoose.model("showcasetemplates", templateSchema);
