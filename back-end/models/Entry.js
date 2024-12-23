const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  textTwo: {
    type: String,
    required: false,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Entry = mongoose.model("Entry", EntrySchema);

module.exports = Entry;
