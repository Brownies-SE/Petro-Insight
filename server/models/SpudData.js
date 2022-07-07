//TODO Oracle connection requirement
const { Schema, model } = require("mongoose");

const spudDataSchema = new Schema({
  County: {
    type: String,
  },
  PermittedNotSpud: {
    type: String,
  },
  SpudLast12Mo: {
    type: String,
  },
});

const SpudData = model("SpudData", spudDataSchema);

module.exports = SpudData;
