const db = require("../../utils/db")();

const getAllTodos = (req, res) => {
  db.query(`SELECT * FROM todos ORDER BY created_at ASC;`)
    .then((result) => {
      if (result.rowCount === 0) {
        return res
          .status(404)
          .send({ err: "No entry found inside the database" });
      }
      return res.status(200).json(result.rows);
    })
    .catch((e) => res.status(500).json({ err: e }));
};

module.exports = getAllTodos;
