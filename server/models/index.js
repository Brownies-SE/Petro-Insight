// TODO fix model import/requires
const SpillReport = require("./SpillReport");
const Profile = require("./Profile");
const Production = require("./Production");
const NOAV = require("./NOAV");
const PendingPermits = require("./PendingPermits");
const WellStatus = require("./WellStatus");
const InspectionData = require("./InspectionData");
const PluggedWells = require("./PluggedWells");
const ProductionBOE = require("./ProductionBOE");
const SpudData = require("./SpudData");
const InspectionCompletedHR = require("./InspectionCompletedHR");
const InspectionRequiredHR = require("./InspectionRequiredHR");
const Notifications = require("./Notifications");
const OperatorChange = require("./OperatorChange");

module.exports = {
  PluggedWells,
  SpillReport,
  Profile,
  Production,
  NOAV,
  PendingPermits,
  WellStatus,
  InspectionData,
  InspectionCompletedHR,
  InspectionRequiredHR,
  Notifications,
  OperatorChange,
  ProductionBOE,
  SpudData,
};
