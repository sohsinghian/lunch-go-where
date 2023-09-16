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

router.delete("/remove", async (req, res) => {
  try {
    const { restaurantName } = req.body;

    const deletedItem = await pool.query(
      `DELETE FROM restaurants
          WHERE name=$1`,
      [restaurantName]
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

module.exports = router;
