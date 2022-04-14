const { user } = require("../models");

module.exports = {
    index: async (_, res) => {
        const user = await User.findAll({});
        res.render("/views", { user });
    },

    // Create
    create: async (_, res) => {
        res.render("/views")
    },

    // POST
    post: async (_, res) => {
        await User.create({
            name: req.body.name,
            group: req.body.group,
            email: req.body.email,
        });
        res.redirect("/views")
    },

    // UPDATE
    check: async (req, res) => {
        await User.update({
            name: req.body.name,
            group: req.body.group,
            email: req.body.email,
        }, {
        where: {
            id: req.body.id}
        });
        res.redirect("/views")
    },

    //DELETE
    delete: async (req, res) => {
        await User.destroy({
            where: {
                id: req.body.id,
            },
        });
        res.redirect("/views")
    }
};
