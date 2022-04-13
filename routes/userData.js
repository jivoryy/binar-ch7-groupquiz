const express = require("express");
const router = express.Router();

const { userData } =  require("../models");

router.get("/userData", async (_, res) => {
    res.status(200).jason(await userData.findAll());
});

// POST DATA
router.post("/userData", async (req, res) => {
    const data = await userData.create({
        name: req.body.name,
        group: req.body.group,
        email: req.body.email,
    });

    res.status(201).json(userData);
});

// UPDATE DATA
router.put("/userData/:id", async (req, res) => {
    const data = await userData.create({
        name: req.body.name,
        group: req.body.group,
        email: req.body.email,
    }, {
    where: {
        id: req.body.id
    }
    });
    res.status(204).json(userData);
});

// DELETE DATA
router.delete("/userData", async (req, res) => {
    const userData = await userData.destroy({
        where: {
            id: req.body.id
        }
    })
    res.status(204).json(userData);
})

module.exports = router;

