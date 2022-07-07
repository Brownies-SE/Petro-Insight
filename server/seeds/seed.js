//TODO connect to DB and require correct models
const db = require("../config/connection");
const {
  SpillReport,
  Profile,
  NOAV,
  PendingPermits,
  WellStatus,
  InspectionData,
  InspectionCompletedHR,
  InspectionRequiredHR,
  Notifications,
  ProductionBOE,
  SpudData,
  PluggedWells,
  OperatorChange,
  Production,
} = require("../models");

const spillReportData = require("./Spills.json");
const profileData = require("./Profiles.json");
const noavData = require("./NOAV.json");
const pendingPermitsData = require("./Pending_Permits.json");
const wellStatusData = require("./Well_Status.json");
const inspectionDataData = require("./inspection_Data.json");
const inspectionCompletedData = require("./Inspection_Completed_HR.json");
const InspectionRequiredHRData = require("./inspection_Required_HR.json");
const notificationsData = require("./Notifications");
const operatorChangeData = require("./Operator_Change.json");
const spudData = require("./Spud_Data.json");
const productionBOEData = require("./Production_BOE.json");
const pluggedWellsData = require("./Plugged_Wells.json");
const productionData = require("./ProdSearch.json");

db.once("open", async () => {
  await Profile.deleteMany({});
  await PendingPermits.deleteMany({});
  await SpudData.deleteMany({});
  await WellStatus.deleteMany({});
  await ProductionBOE.deleteMany({});
  await InspectionData.deleteMany({});
  await InspectionRequiredHR.deleteMany({});
  await InspectionCompletedHR.deleteMany({});
  await NOAV.deleteMany({});
  await SpillReport.deleteMany({});
  await Notifications.deleteMany({});
  await PluggedWells.deleteMany({});
  await OperatorChange.deleteMany({});
  await Production.deleteMany({});

  const spillReport = await SpillReport.insertMany(spillReportData);
  spillReport
    ? console.log("SpillReport seeded!")
    : console.log("SpillReport error!");

  const profile = await Profile.insertMany(profileData);
  profile ? console.log("Profile seeded!") : console.log("Profile error!");

  const productionBOE = await ProductionBOE.insertMany(productionBOEData);
  productionBOE
    ? console.log("ProductionBOE seeded!")
    : console.log("ProductionBOE error!");

  const noav = await NOAV.insertMany(noavData);
  noav ? console.log("NOAV seeded!") : console.log("NOAV error!");

  const pendingPermits = await PendingPermits.insertMany(pendingPermitsData);
  console.log("HERE");
  pendingPermits
    ? console.log("PendingPermits seeded!")
    : console.log("PendingPermits error!");

  const wellStatus = await WellStatus.insertMany(wellStatusData);
  wellStatus
    ? console.log("WellStatus seeded!")
    : console.log("WellStatus error!");

  const inspectionData = await InspectionData.insertMany(inspectionDataData);
  inspectionData
    ? console.log("inspectionData seeded!")
    : console.log("inspectionData error!");

  const inspectionCompletedHRData = await InspectionCompletedHR.insertMany(
    inspectionCompletedData
  );
  inspectionCompletedHRData
    ? console.log("inspectionCompletedHRData seeded!")
    : console.log("inspectionCompletedHRData error!");

  const inspectionRequiredHR = await InspectionRequiredHR.insertMany(
    InspectionRequiredHRData
  );
  inspectionRequiredHR
    ? console.log("inspectionCompletedHRData seeded!")
    : console.log("inspectionCompletedHRData error!");

  const notifications = await Notifications.insertMany(notificationsData);
  notifications
    ? console.log("notifications seeded!")
    : console.log("notifications error!");

  const operatorChange = await OperatorChange.insertMany(operatorChangeData);
  operatorChange
    ? console.log("operatorChange seeded!")
    : console.log("operatorChange error!");

  const spud = await SpudData.insertMany(spudData);
  spud
    ? console.log("operatorChange seeded!")
    : console.log("operatorChange error!");

  const production = await Production.insertMany(productionData);
  production
    ? console.log("productionData seeded!")
    : console.log("productionData error!");

  process.exit(0);
});
