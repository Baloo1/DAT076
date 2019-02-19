const Pool = require('pg').Pool();
const pool = new Pool({
    // TODO - put this info into another file
    user: 'test',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: '5432',
});

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
        if (error) {
            throw error
        }

        // TODO send response
    })
};