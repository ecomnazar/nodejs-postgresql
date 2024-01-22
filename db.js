const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "students",
  port: 5432,
});

module.exports = pool;
