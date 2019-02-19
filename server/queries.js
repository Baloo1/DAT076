const Pool = require('pg').Pool;
const pool = new Pool({
    // TODO - put this info into another file
    user: 'api',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: '5432',
});

const getUserIDByEmail = (req, response) => {
    const {email} = req.body;

    pool.query('SELECT user_id FROM users WHERE email = $1', [email], (error, results) => {
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
};

// Takes a request with email and hashed password, compares and returns a 200 or 401 depending on success or failure
const validatePassword = (req, response) => {
    // TODO make this actually do a proper password check instead of plaintext
    const {email, passSent} = req.body;

    pool.query('SELECT password FROM users WHERE email = $1', [email], (error, results) => {
        if (error) {
            throw error
        }

        const passHere = results.rows[0].password;

        // TODO handle this properly
        if (passSent === passHere) {
            response.status(200);
        } else {
            response.status(401);
        }
    })
};

const getUserByID = (req, response) => {
    const id = req.params.id;

    pool.query('SELECT (email, name, img_id, phone, website, twitter) FROM users WHERE user_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
};

const createUser = (req, response) => {
    const {email, password, name} = req.body;
    pool.query('SELECT MAX(id) FROM users', (error, results) => {
        if (error) {
            response.status(400)
        }

        const id = results.rows[0] + 1;

        pool.query('INSERT INTO users (id, email, password, name) VALUES ($1, $2, $3, $4)', [id, email, password, name], (error, results) => {
            // TODO more specific checks here might be good
            if (error) {
                response.status(400)
            } else {
                response.status(200)
            }
        })
    })
};


// TESTING
pool.query('SELECT password FROM users WHERE user_id = 0', (error, results) => {
    if (error) {
        throw error
    }
    console.log(results.rows[0].password)
})