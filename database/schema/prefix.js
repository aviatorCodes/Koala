const { model, Schema } = require("mongoose");

const prefix = model(
  "prefix",
  new Schema({
    guildID: {
      type: Number,
      unique: true,
    },
    prefix: String,
    setAt: Date,
  })
);

module.exports = { prefix };
