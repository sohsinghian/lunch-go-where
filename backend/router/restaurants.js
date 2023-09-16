const express = require("express");
const router = express.Router();
const pool = require("../database/database.js");

router.get("/all", async (req, res) => {
  try {
    const restaurants = await pool.query("SELECT * FROM restaurants");
    res.status(200).json(restaurants.rows);
  } catch (error) {
    res.json({ status: "error", message: "connection error" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { restaurantName } = req.body;

    const restaurant = await pool.query(
      `INSERT INTO restaurants (name)
      VALUES ($1)`,
      [restaurantName]
    );
    console.log("restaurant added is: ", restaurant);

    res.json({ status: "ok", message: "added to database" });
  } catch (error) {
    res
      .status(401)
      .json({ status: "error", message: "problem with adding to database" });
  }
});

router.delete("/remove", async (req, res) => {
  try {
    const { restaurantId } = req.body;

    const deletedItem = await pool.query(
      `DELETE FROM restaurants
          WHERE id=$1`,
      [restaurantId]
    );
    if (deletedItem.rowCount === 1) {
      res.json({ status: "ok", message: "item deleted" });
    } else {
      res.json({ status: "error", message: "problems with deleting item" });
    }
  } catch {
    res.json({ status: "error", message: "connection error" });
  }
});

router.get("/random", async (req, res) => {
  try {
    const restaurants = await pool.query(`SELECT * FROM restaurants`);

    if (restaurants.rows.length > 0) {
      const random =
        restaurants.rows[Math.floor(Math.random() * restaurants.rows.length)]
          .name;
      res.status(200).json(random);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    res
      .status(401)
      .json({ status: "error", message: "problem with returning value" });
  }
});

module.exports = router;
