const { readHistory } = require("./historyController");
const { readUser } = require("./userController");
class HomePage {
  static getHomePage(req, res, next) {
    res.render("index", { title: "Express" });
  }

  static getLoginPage(req, res) {
    res.render("login", { title: "Login Page" });
  }

  static async getUserPage(req, res) {
    const user = await readUser();
    res.render("userList", { title: "User List Page", data: user });
  }

  static async getUserDetails(req, res) {
    const user = await readHistory(req.query.name);
    res.render("userDetails", { title: "User List Page", data: user });
  }
}

module.exports = { HomePage };
