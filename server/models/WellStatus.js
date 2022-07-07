const { Schema, model } = require("mongoose");

const wellStatusSchema = new Schema({
  APICountyCode: {
    type: String,
  },
  APISequenceNumber: {
    type: String,
  },
  WellName: {
    type: String,
  },
  WellNumber: {
    type: String,
  },
  Operator: {
    type: String,
  },
  OperatorNumber: {
    type: String,
  },
  QtrQtr: {
    type: String,
  },
  Section: {
    type: String,
  },
  Township: {
    type: String,
  },
  Range: {
    type: String,
  },
  Status: {
    type: String,
  },
  Status_Date: {
    type: String,
  },
  ScoutCard: {
    type: String,
  },
  FacilityId: {
    type: String,
  },
  Lat: {
    type: String,
  },
  Long: {
    type: String,
  },
  Chart: {
    type: String,
  },
  County: {
    type: String,
  },
  Municipality: {
    type: String,
  },
});

const wellStatus = model("WellStatus", wellStatusSchema);

module.exports = wellStatus;
