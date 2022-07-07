const { Schema, model } = require("mongoose");

const pendingPermitsSchema = new Schema({
  DocNumber: {
    type: String,
  },
  WellName: {
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
  Lat: {
    type: String,
  },
  Long: {
    type: String,
  },
  County: {
    type: String,
  },
  Type: {
    type: String,
  },
  Municipality: {
    type: String,
  },
  Related02A: {
    type: String,
  },
});

const PendingPermits = model("PendingPermits", pendingPermitsSchema);

module.exports = PendingPermits;
