const router = require("express").Router();

const {
  getAllTodos,
  addOneTodo,
  deleteOneTodo,
  updateOneTodo,
  deleteAllTodos,
} = require("../controllers/todoControllers");

router.route("/").get(getAllTodos).post(addOneTodo).delete(deleteAllTodos);
router.route("/:id").delete(deleteOneTodo).put(updateOneTodo);

module.exports = router;
