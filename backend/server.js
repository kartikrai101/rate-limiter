const express = require("express");
const dotenv = require('dotenv').config({path: './.env'});
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    res.send("Hey, this is the homepage!")
})

app.get('/api/v1', (req, res) => {
    res.status(200).json({name: "Version 1 api"})
})

app.listen(8000, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
})