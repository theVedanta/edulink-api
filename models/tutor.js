const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorSchema = new Schema(
  {
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    degree: String,
    exp: String,
    desc: String,
  },
  { timestamps: true }
);

const model = mongoose.model("tutor", TutorSchema);

module.exports = model;
