const express = require("express");
const router = express.Router();
const exceptionHandling = require("./exceptionHandling");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// keep the exceptionHandling on the bottom of the index routes
router.use(exceptionHandling);

module.exports = router;
