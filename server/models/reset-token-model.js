const { Schema, model } = require("mongoose");

const ResetTokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  resetToken: { type: String, require: true },
});

module.exports = model("ResetToken", ResetTokenSchema);
