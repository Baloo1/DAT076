require('dotenv').config();

const pg = require('pg');
pg.defaults.ssl = false;

module.exports = {
    client: 'pg',
    connection: 'postgres://api:password@localhost:5432/api'
};