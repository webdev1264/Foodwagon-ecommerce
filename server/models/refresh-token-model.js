const { Schema, model } = require("mongoose");

const RefreshTokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
});

module.exports = model("RefreshTokens", RefreshTokenSchema);
