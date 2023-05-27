require("dotenv").config();
const express = require("express");
const db = require("./utils/db")("test");

const app = express();
app.use(express.json());

app.use("/seed", (req, res) => {
  db.query(
    `CREATE TABLE todos(
        id SERIAL UNIQUE PRIMARY KEY,
        name VARCHAR(255) UNIQUE,
        description VARCHAR(255),
        completed BOOLEAN DEFAULT FALSE
    );`
  )
    .then((result) => res.send(result.command))
    .catch((e) => console.log(e));
});

app.use("/api/v1/", require("./routes/todosRoutes"));

app.listen(process.env.APP_PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`The application is running on ${process.env.APP_PORT}`);
});
