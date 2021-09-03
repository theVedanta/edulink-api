const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Student = require("../models/student");
const Tutor = require("../models/tutor");

// ROUTES
router.get("/", checkAuthed, (req, res) => {
  console.log("AUTH TEMPLATE HERE");
});

// MIDDLEWARE
function checkAuthed(req, res, next) {
  let tutorToken = req.cookies["tutor-auth"];
  let studentToken = req.cookies["student-auth"];

  if (tutorToken || studentToken) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
      if (err) {
        next();
      } else {
        let user;

        if (tutorToken) {
          user = await Tutor.findById(user.id);
        } else if (studentToken) {
          user = await Student.findById(user.id);
        }

        if (user) {
          req.user = user;
          return tutorToken ? res.redirect("/tutor") : res.redirect("/student");
        } else {
          next();
        }
      }
    });
  } else {
    next();
  }
}

module.exports = router;
