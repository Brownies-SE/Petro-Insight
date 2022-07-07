const { Schema, model } = require("mongoose");

const notificationsSchema = new Schema({
  DocNumber: {
    type: String,
  },
  Abbr: {
    type: String,
  },
  Date: {
    type: String,
  },
  FacilityID: {
    type: String,
  },
  FacilityName: {
    type: String,
  },
  NoticeDescription: {
    type: String,
  },
  County: {
    type: String,
  },
  APICountyCode: {
    type: String,
  },
  APISequenceNumber: {
    type: String,
  },
  lat: {
    type: String,
  },
  long: {
    type: String,
  },
  LocationID: {
    type: String,
  },
  Municipality: {
    type: String,
  },
});

const Notifications = model("Notifications", notificationsSchema);

module.exports = Notifications;
