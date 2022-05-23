require('dotenv').config();

const PORT = process.env.PORT || 5000;

const dbConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DB,
};
console.log('dbConfig===', dbConfig);

module.exports = {
  PORT,
  dbConfig,
};
