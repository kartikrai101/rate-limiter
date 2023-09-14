const express = require('express');
const cors = require('cors'); // require cors package

const app = express();

app.use(cors({
    origin: '*'
})); // this allows all domains to access your APIs

app.get('/', (req, res) => {
    res.status(200).json({name: "Kartik"});
})

app.listen(8000, () => {
    console.log("Listening on http://localhost:8000");
})