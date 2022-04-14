const express = require("express");
const router = express.Router();

const { user } =  require("../models");

router.get("/user/", user.index);

// POST DATA
router.post("/user/create", user.create );

// UPDATE DATA
router.put("/user/post", user.post);

// DELETE DATA
router.delete("/user/delete", user.delete);

module.exports = router;
