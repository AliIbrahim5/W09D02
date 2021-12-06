const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const app = express();

dotenv.config();

const db = require("./db/index");
app.use(express.json());
app.use(cors());

const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
