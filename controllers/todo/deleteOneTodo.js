const db = require("../../utils/db")();

const deleteOneTodo = (req, res) => {
  const { id } = req.params;

  if (typeof parseInt(id) !== "number") {
    return res
      .status(400)
      .json({ err: "Provide the id in format of a number" });
  }

  db.query(`SELECT id FROM todos WHERE id = $1`, [id])
    .then((result) => {
      if (result.rowCount === 0) {
        return res
          .status(400)
          .send({ err: `The entry with id ${id} doesn't exist in the system` });
      }

      db.query(`DELETE FROM todos WHERE id=$1 RETURNING *`, [id])
        .then((result) => {
          return res
            .status(200)
            .json({ msg: `${result.rows[0].id} has been deleted` });
        })
        .catch((e) =>
          res
            .status(500)
            .json({ err: e, msg: `Error deleting the item with id ${id}` })
        );
    })
    .catch((e) => {
      return res.status(400).send({ err: e });
    });
};

module.exports = deleteOneTodo;
