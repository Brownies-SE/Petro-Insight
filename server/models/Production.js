const { Schema, model } = require("mongoose");

const productionSchema = new Schema({
  County: {
    type: String,
  },
  Sequence: {
    type: String,
  },
  Sidetrack: {
    type: String,
  },
  Year: {
    type: Number,
  },
  OilProduction: {
    type: Number,
    default: 0,
  },
  OilSales: {
    type: Number,
    default: 0,
  },
  GasProduction: {
    type: Number,
    default: 0,
  },
  GasSales: {
    type: Number,
    default: 0,
  },
  WaterProduced: {
    type: Number,
    default: 0,
  },
  Location: {
    type: String,
  },
  OperatorNumber: {
    type: String,
  },
  Operator: {
    type: String,
  },
});

const Production = model("Production", productionSchema);

module.exports = Production;
