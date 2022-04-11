const { User, History } = require("../models");
const find = async () => {
  const user = await User.findAll({
    include: [History],
  });
  console.log(user);
};

find();
