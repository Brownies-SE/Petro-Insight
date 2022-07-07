const { Schema, model } = require("mongoose");

const pluggedWellsSchema = new Schema({
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
  Status: {
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

const PluggedWells = model("PluggedWells", pluggedWellsSchema);

module.exports = PluggedWells;
