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

  createUser: async (name, group, email) => {
    await User.create({
      name: name,
      group: group,
      email: email,
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

  updateUser: async (id, name, group, email) => {
    await User.update(
      {
        name: name,
        group: group,
        email: email,
      },
      {
        where: {
          id: id,
        },
      }
    );
  },

  deleteUser: async (name) => {
    await User.destroy({
      where: {
        name: name,
      },
    });
    await History.destroy({
      where: {
        name: name,
      },
    });
  },
};
