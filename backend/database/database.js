const Pool = require("pg").Pool;

const pool = new Pool({
  user: "sohsinghian",
  host: "localhost",
  database: "lunch_go_where",
  password: process.env.PASSWORD,
  port: 5432,
});

module.exports = pool;
