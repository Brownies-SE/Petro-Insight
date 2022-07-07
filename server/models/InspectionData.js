const { Schema, model } = require("mongoose");
//For some reason this is not creating the longitude in the database

const inspectionDataSchema = new Schema({
  InspectionDate: {
    type: String,
  },
  DocNumber: {
    type: String,
  },
  LocationID: {
    type: String,
  },
  CountyCode: {
    type: String,
  },
  SequenceNumber: {
    type: String,
  },
  InspectionStatus: {
    type: String,
  },
  WellName: {
    type: String,
  },
  lat: {
    type: String,
  },
  long: {
    type: String,
  },
  County: {
    type: String,
  },
  Link: {
    type: String,
  },
  Municipality: {
    type: String,
  },
  CorrectiveAction: {
    type: String,
  },
});

const InspectionData = model("InspectionData", inspectionDataSchema);

module.exports = InspectionData;
