const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const generateRoute = require('./routes/generate');
const cors = require('cors');

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.use(cors());
app.use(express.json());
app.use('/', generateRoute);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});