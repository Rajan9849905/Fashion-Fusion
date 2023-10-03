const { Schema, model } = require("mongoose");
const commonSchema = require("../../utils/commonSchema");

const authSchema = new Schema({
  email: { type: String, required: true },
  token: { type: Number, required: "token is missing..." },

  ...commonSchema,
});

module.exports = model("auth", authSchema);
