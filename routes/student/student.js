const router = require("express").Router();
const Student = require("../../models/student");
const jwt = require("jsonwebtoken");

// MIDDLEWARE
router.use("/auth", require("./auth"));
router.get("/logout", (req, res) => {
  res.clearCookie("student-auth").redirect("/student/auth");
});

module.exports = router;
