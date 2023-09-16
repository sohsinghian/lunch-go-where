const Pool = require("pg").Pool;

const pool = new Pool({
  user: "superuser",
  host: "localhost",
  database: "lunch-go-where",
  password: process.env.PASSWORD,
  port: 5432,
});

module.exports = pool;
