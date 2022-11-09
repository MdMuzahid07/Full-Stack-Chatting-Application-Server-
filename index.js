const express = require('express');
const app = express();
const cors = require('cors');
const DatabaseConnection = require('./utils/DatabaseConnection');
const dotEnv = require('dotenv').config();
const port = process.env.PORT || 8080;


//middleware
app.use(cors());
app.use(express.json());

// database connection
DatabaseConnection();

app.get("/", (req, res, next) => {
    res.send("server running?")
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});