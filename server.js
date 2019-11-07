const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./route/route')
const soal = require('./soal.js')
const helmet = require('helmet')
const server = () => {
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    routes(app);
    app.use(express.static(path.join(__dirname,'/client/build')))
    app.get('/client',(req,res) => {
        res.sendFile(path.join(__dirname,'/client/build/index.html'));
      })
    app.listen(port, () => {
        console.log(`RUNNING ${port}`)
    });

}
server()
console.log("==============SOAL 1===============")
soal.findMaxMin(['sdsds',132,31,1,'sasda',34,5,5])
console.log("==============SOAL 2===============")
soal.multipleNumber(96)
console.log("==============SOAL 3===============")
soal.isPalindrom('mALaM')
console.log("===================================")