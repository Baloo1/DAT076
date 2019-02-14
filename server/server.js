const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
    // express code here
    const app = express()
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // API routes
    app.use('/api/', require('./routes/index'))

    // React routes
    app.get('*', (req,res) => {
        return handle(req,res)
    })
    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })
})
