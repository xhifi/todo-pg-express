const router = require("express").Router();

const {
  getAllTodos,
  addOneTodo,
  deleteOneTodo,
  updateOneTodo,
  getOneTodo,
} = require("../controllers/todoControllers");

router.route("/").get(getAllTodos).post(addOneTodo);
router.route("/:id").delete(deleteOneTodo).put(updateOneTodo).get(getOneTodo);

module.exports = router;
