const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ConnectDB = require("./db/config");
const memberRoutes = require("./routes/memberRoutes");
const app = express();
ConnectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/members", memberRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running ${process.env.PORT}`)
);
