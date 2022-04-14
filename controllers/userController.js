const { User, History } = require("../models");

module.exports = {
  readUser: async () => {
    const user = await User.findAll({
      include: [
        {
          model: History,
          required: false, // do not generate INNER JOIN
          attributes: [
            "id",
            "name",
            "date",
            "arrive",
            "leave",
            "createdAt",
            "updatedAt",
          ],
        },
      ],
      attributes: ["id", "name", "group", "email"],
    });
    return user;
  },

  createUser: async (req, res) => {
    await User.create({
      name: req.body.name,
      group: req.body.group,
      email: req.body.email,
    });
  },

  editUser: async (req, res) => {
    const existinguser = await User.findOne({
      where: {
        id: +req.params.id,
      },
    });
    return existinguser;
  },

  updateUser: async (req, res) => {
    await User.update(
      {
        name: req.body.name,
        group: req.body.group,
        email: req.body.email,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
  },

  deleteUser: async (req, res) => {
    await User.destroy({
      where: {
        name: req.params.name,
      },
    });
    await History.destroy({
      where: {
        name: req.params.name,
      },
    });
  },
};
