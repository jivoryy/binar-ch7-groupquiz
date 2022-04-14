const express = require("express");
const router = express.Router();

const { history } =  require("../models");

router.get("/history/", history.index);

// POST DATA
router.post("/history/create", history.create );

// UPDATE DATA
router.put("/history/post", history.post);

// DELETE DATA
router.delete("/history/delete", history.delete);

module.exports = router;
