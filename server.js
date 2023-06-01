require("dotenv").config();
const express = require("express");
const listen = require("./utils/listen");
const app = express();
app.use(express.json());

app.use("/migrate/", require("./routes/migrationRoutes"));
app.use("/api/v1/todo/", require("./routes/todosRoutes"));
// app.use("/api/v1/users/", require("./routes/usersRoutes"));

listen(process.env.APP_PORT, app);
