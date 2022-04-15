const express = require("express");
const router = express.Router();
const { HomePage } = require("../controllers/home");
const exceptionHandling = require("./exceptionHandling");

/* GET home page. */
router.get("/", HomePage.getHomePage);

// route for APP
router.get("/login", HomePage.getLoginPage);
router.get("/user", HomePage.getUserPage);
router.get("/user/details", HomePage.getUserDetails);
router.get("/user/edit", HomePage.getUserEditForm);
router.get("/user/add", HomePage.getUserAddForm);
router.post("/user/add", HomePage.postUserAdd);
router.post("/user/edit", HomePage.postUserEdit);
router.get("/user/erase", HomePage.postUserDelete);

// keep the exceptionHandling on the bottom of the index routes
router.use(exceptionHandling);

module.exports = router;
