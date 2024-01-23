const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "mhpss",
  port: 5432,
});

// const pool = new Pool({
//   host: "localhost",
//   user: "seven",
//   password: "post",
//   database: "students",
//   port: 5432,
// });

module.exports = pool;
