const express = require("express");
const MembersControllers = require("../controlers/members");
const route = express.Router();

route.get("/", MembersControllers.getMembersList);
route.post("/create", MembersControllers.createMember);
route.patch("/update", MembersControllers.updateMember);
route.delete("/delete/:id", MembersControllers.deleteMember);

module.exports = route;
