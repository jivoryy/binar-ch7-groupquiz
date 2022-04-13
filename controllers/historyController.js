const { history } = require("../models");

module.exports = {
    index: async (_, res) => {
        const history = await History.findAll({});
        res.render("/views", { history });
    },

    // Create
    create: async (_, res) => {
        res.render("/views")
    },

    // POST
    post: async (_, res) => {
        await History.create({
            name: req.body.name,
        date: req.body.group,
        arrive: req.body.email,
        createdAt: Date.now(),
        updatedAt: Date.now (),
        });
        res.redirect("/views")
    },

    // UPDATE
    check: async (req, res) => {
        await History.update({
            name: req.body.name,
        date: req.body.group,
        arrive: req.body.email,
        updatedAt: Date.now(),
        }, {
        where: {
            id: req.body.id}
        });
        res.redirect("/views")
    },

    //DELETE
    delete: async (req, res) => {
        await History.destroy({
            where: {
                id: req.body.id,
            },
        });
        res.redirect("/views")
    }
};
