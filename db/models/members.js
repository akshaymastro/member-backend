const mongoose = require("mongoose");

const MembersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    groups: {
      type: String,
    },
    roles: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Members = mongoose.model("members", MembersSchema);

module.exports = Members;
