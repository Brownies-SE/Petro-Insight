const { Schema, model } = require("mongoose");

const operatorChangeSchema = new Schema({
  APICountyCode: {
    type: String,
  },
  APISequenceNumber: {
    type: String,
  },
  FacilityID: {
    type: String,
  },
  WellName: {
    type: String,
  },
  WellNumber: {
    type: String,
  },
  CurrentOperator: {
    type: String,
  },
  CurrentOperatorNumber: {
    type: String,
  },
  FormerOperator: {
    type: String,
  },
  FormerOperatorNumber: {
    type: String,
  },
  EndDate: {
    type: String,
  },
  WellStatus: {
    type: String,
  },
  StatusDate: {
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
  Meridian: {
    type: String,
  },
  Lat: {
    type: String,
  },
  Long: {
    type: String,
  },
  Municipality: {
    type: String,
  },
  County: {
    type: String,
  },
  Year: {
    type: String,
  },
});

const OperatorChange = model("OperatorChange", operatorChangeSchema);

module.exports = OperatorChange;
