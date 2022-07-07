const { Schema, model } = require("mongoose");

const inspectionRequiredHRSchema = new Schema({
  CountyCode: {
    type: String,
  },
  NotInspected: {
    type: String,
  },
});

const InspectionRequiredHR = model(
  "InspectionRequiredHR",
  inspectionRequiredHRSchema
);

module.exports = InspectionRequiredHR;
