const db = require("../../utils/db")();

const updateOneTodo = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  db.query(`SELECT id, name, description FROM todos WHERE id = $1`, [id])
    .then((result) => {
      if (result.rowCount === 0) {
        return res.status(404).json({ err: `${id} entry doesn't exist` });
      }
      db.query(
        `UPDATE todos SET name=$1, description=$2 WHERE id=$3 RETURNING *`,
        [name, description || result.rows[0].description, id]
      )
        .then((data) => {
          if (data.rowCount === 0) {
            return res.status(500).json({
              err: `The entry with ${id} couldn't be updated. Try again.`,
            });
          }
          return res
            .status(200)
            .json({ msg: `${data.rows[0].id} has been updated.` });
        })
        .catch((e) => {
          return res
            .status(500)
            .json({ msg: `Something went wrong while updating`, err: e });
        });
    })
    .catch((e) => {
      return res
        .status(500)
        .json({ msg: `Something went wrong on the server`, err: e });
    });
};

module.exports = updateOneTodo;
