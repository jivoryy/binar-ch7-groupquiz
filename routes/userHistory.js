const express = require("express");
const router = express.Router();

const { userHistory } =  require("../models");

router.get("/userHistory", async (_, res) => {
    res.status(200).jason(await userHistory.findAll());
});

// POST HISTORY
router.post("/userData", async (req, res) => {
    const history = await userHistory.create({
        name: req.body.name,
        date: req.body.group,
        arrive: req.body.email,
        createdAt: Date.now(),
    });

    res.status(201).json(userHistory);
});

// UPDATE HISTORY
router.put("/userData/:id", async (req, res) => {
    const data = await userHistory.create({
        name: req.body.name,
        date: req.body.group,
        arrive: req.body.email,
        updatedAt: Date.now(),
    }, {
    where: {
        id: req.body.id
    }
    });
    res.status(204).json(userHistory);
});

// DELETE HISTORY
router.delete("/userData", async (req, res) => {
    const userData = await userHistory.destroy({
        where: {
            id: req.body.id
        }
    })
    res.status(204).json(userHistory);
})

module.exports = router;
