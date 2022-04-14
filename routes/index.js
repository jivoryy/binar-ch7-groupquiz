const express = require("express");
const router = express.Router();
const { HomePage } = require("../controllers/home");
const history = require("../controllers/historyController");
const user = require("../controllers/userController");
const exceptionHandling = require("./exceptionHandling");

/* GET home page. */
router.get("/", HomePage.getHomePage);
router.get("/login", HomePage.getLoginPage);
router.get("/user", HomePage.getUserPage);
router.get("/user/details", HomePage.getUserDetails);

// keep the exceptionHandling on the bottom of the index routes
router.use(exceptionHandling);

module.exports = router;
