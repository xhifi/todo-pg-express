require("dotenv").config();
const express = require("express");

const listen = require("./utils/listen");
const { seedUp, seedDown } = require("./controllers/seedControllers");

const app = express();
app.use(express.json());

app.post("/seed-up", seedUp);
app.post("/seed-down", seedDown);

app.use("/api/v1/", require("./routes/todosRoutes"));

listen(process.env.APP_PORT, app);
