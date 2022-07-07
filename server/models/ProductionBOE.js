//TODO Oracle connection requirement
const { Schema, model } = require("mongoose");

const productionBOESchema = new Schema({
  County: {
    type: String,
  },
  ProdDate: {
    type: String,
  },
  Month: {
    type: String,
  },
  Year: {
    type: String,
  },
  Oil: {
    type: String,
  },
  Gas: {
    type: String,
  },
  Water: {
    type: String,
  },
});

const ProductionBOE = model("ProductionBOE", productionBOESchema);

module.exports = ProductionBOE;
