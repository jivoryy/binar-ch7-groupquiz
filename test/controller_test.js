const { readUser } = require("../controllers/userController");

const find = async () => {
  try {
    const History = await readUser();
    console.log(History);
  } catch (err) {
    console.log("error saat menjalankan user findall", err);
  }
};

find();
