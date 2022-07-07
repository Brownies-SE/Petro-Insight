//TODO Oracle connection requirement
const { Schema, model } = require("mongoose");

const spillReportSchema = new Schema({
  DocNumber: {
    type: String,
  },
  SubmitDate: {
    type: String,
    default:"mm/dd/yyyy",
  },
  FacilityId: {
    type: String,
  },
  API: {
    type: String,
  },
  Operator: {
    type: String,
  },
  OperatorNumber: {
    type: String,
  },
  Complaintant: {
    type: String,
  },
  FacilityType: {
    type: String,
    default: "(N/A)",
  },
  GroundwaterImpact: {
    type: String,
    default: " ",
  },
  SurfacewaterImpact: {
    type: String,
    default: " ",
  },
  BermContained: {
    type: String,
  },
  SpillArea: {
    type: String,
  },
  Closed: {
    type: String,
  },
  IncidentDate: {
    type: Date,
    default:"mm/dd/yyyy",
  },
  ResolutionDate: {
    type: String,
    default:"mm/dd/yyyy",
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
  URL: {
    type: String,
  },
  Municipality: {
    type: String,
  },
});

const SpillReport = model("SpillReport", spillReportSchema);

module.exports = SpillReport;
