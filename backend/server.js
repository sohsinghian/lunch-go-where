const express = require("express");
const cors = require("cors");
const restaurants = require("./router/restaurants");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/restaurants", restaurants);

app.get("/", (req, res) => {
  res.send("Lunch Go Where working");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
