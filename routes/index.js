const express = require("express");
const router = express.Router();
const exceptionHandling = require("./exceptionHandling");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// keep the exceptionHandling in the bottom of the routes
router.use(exceptionHandling);

module.exports = router;
