require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/db");

const app = express();
const userRoutes = require("./src/routes/userRoutes");

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(userRoutes);

connectToDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
