const db = require("../../utils/db")();

module.exports = (req, res) => {
  db.query(require("fs").readFileSync(`${process.cwd()}/seed.sql`).toString())
    .then((result) => {
      let response = [];
      result.forEach((query, index) => {
        response.push({ id: index, status: query.command });
      });
      res.status(201).json(response);
    })
    .catch((e) => {
      if (e.code === "42P07") {
        return res.status(400).json({
          msg: "One or more tables in the query already exist in database.",
          err: e,
        });
      }
      return res.status(500).json({ msg: `Can't seed up`, err: e });
    });
};
