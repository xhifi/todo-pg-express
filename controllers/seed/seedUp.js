const db = require("../../utils/db")();

module.exports = (req, res) => {
  db.query(
    require("fs").readFileSync("./seed.sql").toString(),
    (err, result) => {
      if (err)
        return res
          .status(500)
          .send({ error: err, message: "Something went wrong while querying" });
      res.send(result.command);
    }
  );
};
