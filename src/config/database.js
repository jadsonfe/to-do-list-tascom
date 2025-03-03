require('dotenv').config({ path: __dirname + '/../.env' });

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: "127.0.0.1",
    dialect: "postgres",
    logging: console.log, // Mostra logs no terminal
    dialectOptions: {
      ssl: process.env.DB_SSL === "true" ? { require: true, rejectUnauthorized: false } : false
    }
  }
};

