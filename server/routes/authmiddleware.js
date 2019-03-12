const jwt = require('jsonwebtoken');

const withAuth = function(req, res, next) {
    // Support tokens from many places
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).send('Not authorized: No token provided');
    } else {
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) {
                res.status(401).send('Not authorized: Invalid token');
            } else {
                req.id = decoded.id;
                next();
            }
        });
    }
};

module.exports = withAuth;