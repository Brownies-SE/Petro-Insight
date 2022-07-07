const { Schema, model } = require("mongoose");

const inspectionCompletedHRSchema = new Schema({
  CountyCode: {
    type: String,
  },
  Inspected: {
    type: String,
  },
});

const InspectionCompleteHR = model(
  "InspectionCompleteHR",
  inspectionCompletedHRSchema
);

module.exports = InspectionCompleteHR;
