const router = require("express").Router();
const Student = require("../../models/student");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// MIDDLEWARE
router.get("/", (req, res) => {
  console.log("AUTH HERE");
});

router.post("/login", (req, res) => {
  console.log("Login auth");
});

router.post("/register", (req, res) => {
  console.log("Register student");
});

module.exports = router;
