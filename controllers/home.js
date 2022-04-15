const { readHistory } = require("./historyController");
const {
  readUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./userController");
class HomePage {
  static getHomePage(_, res, next) {
    res.render("index", { title: "Express" });
  }

  static getLoginPage(_, res) {
    res.render("login", { title: "Login Page" });
  }

  static async getUserPage(_, res) {
    const user = await readUser();
    res.render("userList", { title: "User List Page", data: user });
  }

  static async getUserDetails(req, res) {
    const user = await readHistory(req.query.name);
    res.render("userDetails", { title: "User Details Page", data: user });
  }

  static async getUserEditForm(req, res) {
    const user = await readHistory(req.query.name);
    res.render("form-edit", { title: "User Edit Page", data: user });
  }

  static async getUserAddForm(_, res) {
    res.render("form-input", { title: "User Create Page" });
  }

  static async postUserAdd(req, res) {
    const body = req.body;
    createUser(body.name, body.group, body.email);
    res.redirect("/user");
  }

  static async postUserEdit(req, res) {
    const body = req.body;
    updateUser(body.id, body.name, body.group, body.email);
    res.redirect("/user");
  }

  static async postUserDelete(req, res) {
    const body = req.body;
    deleteUser(req.query.name);
    res.redirect("/user");
  }
}

module.exports = { HomePage };
