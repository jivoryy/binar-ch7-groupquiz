const { History, User, sequelize } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  readHistory: async (name) => {
    const user = await User.findOne({
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
      where: {
        name: name,
      },
    });
    return user;
  },

  createHistory: async (req, res) => {
    const username = await User.findOne({
      where: {
        id: req.body.UserId,
      },
    });
    await History.create({
      name: username.name,
      date: req.body.date,
      arrive: req.body.arrive,
      leave: req.body.leave,
      UserId: req.body.UserId,
    });
    res.redirect("/user");
    // res.status(201).json({result:"success"});
  },

  editHistory: async (req, res) => {
    const userhistory = await User.findOne({
      include: [
        {
          model: History,
          required: false, // do not generate INNER JOIN
          attributes: [
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
      where: {
        id: req.params.id,
      },
    });
    res.render("user/update", { userhistory: userhistory });
    // res.status(201).json(userhistory);
  },

  updateHistory: async (req, res) => {
    await History.update(
      {
        //name: req.body.name,
        date: req.body.group,
        arrive: req.body.arrive,
        leave: req.body.leave,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );

    res.redirect("/user");
    // res.status(201).json({test:"success"});
  },

  leaveHistory: async (req, res) => {
    await History.update(
      {
        //name: req.body.name,
        leave: req.body.leave,
      },
      {
        where: {
          id: req.body.id,
          leave: null,
        },
      }
    );
    res.redirect("/user");
    // res.status(201).json({test:"success"});
  },

  arriveHistory: async (req, res) => {
    await History.post(
      {
        //name: req.body.name,
        date: req.body.group,
        arrive: req.body.arrive,
        UserId: req.body.userid,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );

    res.redirect("/user");
    // res.status(201).json({test:"success"});
  },

  deleteHistory: async (req, res) => {
    await History.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("user");
    // res.status(201).json({test:"success"});
  },
};
