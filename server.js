const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./route/route')
const helmet = require('helmet')
const server = () => {
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    routes(app);
    app.listen(port, () => {
        console.log(`RUNNING ${port}`)
    });

}
server()
