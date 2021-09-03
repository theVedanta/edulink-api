const router = require("express").Router();
const Tutor = require("../../models/tutor");
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
  console.log("Register Teacher");
});

module.exports = router;
