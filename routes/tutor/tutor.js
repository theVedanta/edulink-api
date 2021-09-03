const router = require("express").Router();
const Tutor = require("../../models/tutor");
const jwt = require("jsonwebtoken");

// ROUTES
router.use("/auth", require("./auth"));
router.get("/logout", (req, res) => {
  console.log("Logged out");
  res.clearCookie("tutor-auth").redirect("/tutor/auth");
});

module.exports = router;
