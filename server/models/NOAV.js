//TODO Oracle connection requirement
const { Schema, model } = require("mongoose");

const NOAVSchema = new Schema({
  DocumentNumber: {
    type: String,
  },
  NOAVIssueDate: {
    type: String,
    default: "mm/dd/yyyy",
  },
  OperatorNumber: {
    type: String,
  },
  OperatorName: {
    type: String,
  },
  APICountyCode: {
    type: String,
    default: "(N/A)",
  },
  APISequenceNumber: {
    type: String,
    default: "(N/A)",
  },
  FacilityID: {
    type: String,
    default: "(N/A)",
  },
  FacilityOrWellName: {
    type: String,
    default: "(N/A)",
  },
  FacilityOrWellNumber: {
    type: String,
    default: "(N/A)",
  },
  County: {
    type: String,
  },
  Rule: {
    type: String,
  },
  RuleDescription: {
    type: String,
  },
  InitialDiscoveryDate: {
    type: String,
    default: "mm/dd/yyyy",
  },
  SelfReported: {
    type: String,
  },
  DateOfViolation: {
    type: String,
    default: "mm/dd/yyyy",
  },
  AllegedViolationDescription: {
    type: String,
    default: "(N/A)",
  },
  CorrectiveActionDescription: {
    type: String,
  },
  CorrectiveDueDate: {
    type: String,
    default: "mm/dd/yyyy",
  },
  CorrectiveStartDate: {
    type: String,
    default: "mm/dd/yyyy",
  },
  CorrectiveActionCompleteDate: {
    type: String,
    default: "mm/dd/yyyy",
  },
  CorrectiveActionComplete: {
    type: String,
  },
  CauseNumber: {
    type: String,
  },
  OrderNumber: {
    type: String,
  },
  DocketNumber: {
    type: String,
  },
  EnforcementAction: {
    type: String,
  },
  FinalResolutionDate: {
    type: String,
    default: "mm/dd/yyyy",
  },
  FinalResolutionComments: {
    type: String,
  },
  ObviousDuration: {
    type: String,
  },
  PerformedAsRequired: {
    type: String,
    default: "(N/A)",
  },
  URL: {
    type: String,
  },
  Year: {
    type: String,
  },
  chartdate: {
    type: String,
  },
  Municipality: {
    type: String,
    default: "(N/A)",
  },
});

const NOAV = model("NOAV", NOAVSchema);

module.exports = NOAV;
