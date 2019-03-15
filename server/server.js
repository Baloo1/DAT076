const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const whitelist = [
    'http://127.0.0.1:3000/',
    'http://0.0.0.0:3000',
    'http://localhost:3000'
];

//async options for cors
const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (whitelist.indexOf(req.header('origin')) !== -1) {
        corsOptions = {
            origin: true,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
            exposedHeaders: ['x-auth-token']
        }; // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = {
            origin: false,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
            exposedHeaders: ['x-auth-token']
        }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};


nextApp.prepare().then(() => {
    // express code here
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cors(corsOptionsDelegate));

    // API routes
    app.use('/api/', require('./routes/api'));

    // React routes
    app.get('*', (req,res) => {
        return handle(req,res);
    });
    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`);
    });

    app.get('/user/:UserName/:id', (req, res) => {
        const actualPage = '/user';
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPage, queryParams);
    });
});
