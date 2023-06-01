const db = require("../../utils/db")();

const getOneTodo = (req, res) => {
  const { id } = req.params;

  db.query(`SELECT * FROM todos WHERE id = $1`, [id])
    .then((result) => {
      if (result.rowCount === 0) {
        return res.status(404).json({ msg: `No entry found with id ${id}` });
      }
      return res.status(200).json(result.rows[0]);
    })
    .catch((e) => {
      res
        .status(500)
        .json({ msg: `Something went wrong on the server`, err: e });
    });
};

module.exports = getOneTodo;
