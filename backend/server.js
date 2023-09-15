const express = require("express");
const dotenv = require('dotenv').config({path: './.env'});
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const database = require('./database');
const connection = require("./database");
const rateLimiter = require('./rateLimiter')

const app = express();

app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json());
app.use(rateLimiter.rateLimiter);

app.get('/ping', async (req, res) => {
    res.status(200).json({
        "success": true,
        "message": "validated!"
    })
})


app.listen(8000, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
})