const db = require("../../utils/db")();

const addOneTodo = (req, res) => {
  const { name, description } = req.body;
  //If no name is provided I will throw an error and reject the req
  if (!name || name.length < 1) {
    return res.status(400).send("The name is required");
  }

  //look for the name in database and see if an entry already exists
  //if it exists, reject the response

  db.query(`SELECT * FROM todos WHERE name = $1`, [name])
    .then((data) => {
      console.log(data);
      if (data.rowCount.length > 0) {
        return res
          .status(400)
          .json({ error: "Entry exists with the same name" });
      }
      db.query(
        `INSERT INTO todos(name, description) VALUES($1, $2) RETURNING *`,
        [name, description]
      )
        .then((data) => {
          console.log(data);
          return res.status(200).json({
            msg: `The entry with name ${data.rows[0].name} and id ${data.rows[0].id}`,
          });
        })
        .catch((e) => {
          return res.status(500).send(e);
        });
    })
    .catch((e) => {
      res.status(500).send(e);
    });
};

const addOneTodoAsync = async (req, res) => {
  const { name, description } = req.body;

  if (!name || name.length < 1) {
    return res.status(400).send("The name is required");
  }

  const findEntry = await db.query(`SELECT name from todos WHERE name = $1`, [
    name,
  ]);
  if (findEntry.rowCount > 0) {
    return res
      .status(400)
      .send({ error: "Entry already exists in DB with same name" });
  }
  const addEntry = await db.query(
    `INSERT INTO todos(name, description) VALUES($1, $2) RETURNING *`,
    [name, description]
  );
  if (addEntry.rowCount > 0) {
    return res.status(200).json({
      msg: `Your entry with id ${addEntry.rows[0].id} has been added to the database with name ${addEntry.rows[0].name}`,
    });
  }
  return res.status(500).json({ error: "Error inserting data" });
};

module.exports = addOneTodo;
