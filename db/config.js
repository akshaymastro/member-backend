const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGON_URL);

    console.log("Mongodb connected");
  } catch (e) {
    console.log(e);
  }
};

module.exports = ConnectDB;
