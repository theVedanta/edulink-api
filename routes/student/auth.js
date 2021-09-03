const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Tutor = require("../../models/student");

// ROUTES
router.post("/register", (req, res) => {
  console.log("register post");
});

router.post("/login", (req, res) => {
  console.log("login post");
});

module.exports = router;
