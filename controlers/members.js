const Members = require("../db/models/members");

const MembersControllers = {};

MembersControllers.createMember = async (req, res, next) => {
  try {
    const Member = new Members();

    const requestRes = await Members(req.body).save();

    res.status(201).json({ message: "Member is create Successfully" });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

MembersControllers.getMembersList = async (req, res, next) => {
  try {
    const MemberList = await Members.find({});
    res.status(200).json({ members: MemberList });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

MembersControllers.updateMember = async (req, res, next) => {
  try {
    const updatedMember = await Members.updateOne(
      { _id: req.body.id },
      { ...req.body }
    );
    res.status(201).json({ message: "Member Update Successfully" });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

MembersControllers.deleteMember = async (req, res, next) => {
  try {
    const deletMember = await Members.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Members Deleted Successfully" });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

module.exports = MembersControllers;
