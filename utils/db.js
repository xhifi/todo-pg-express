const db = (database) => {
  const Pool = require("pg").Pool;
  return new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: database || process.env.PG_DATABASE,
  });
};

module.exports = db;
