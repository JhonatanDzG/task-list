const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "JhonatanDzG117",
  host: "localhost",
  port: 5432,
  database: "tasksdb",
});

module.exports = pool;
