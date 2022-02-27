var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", user: true });
});

router.get("/profile", (req, res) => {
  res.render("screens/profileScreen");
});

router.get("/login", (req, res) => {
  res.render("screens/loginScreen");
});

module.exports = router;
