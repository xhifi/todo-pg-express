const db = require("../../utils/db")();
const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  db.query(
    require("fs")
      .readFileSync(
        fs.readFileSync(path.join(`${process.cwd()}/seed.sql`)).toString()
      )
      .toString(),
    (err, result) => {
      if (err)
        return res
          .status(500)
          .send({ error: err, message: "Something went wrong while querying" });
      res.send(result.command);
    }
  );
};
