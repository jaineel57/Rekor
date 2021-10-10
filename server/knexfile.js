const path = require('path');
require('dotenv').config();

module.exports = {
  
  development: {
    client: 'pg',
    connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`,
  },
};



