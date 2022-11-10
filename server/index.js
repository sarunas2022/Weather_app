const express = require('express');
const axios = require('axios');
require('dotenv').config();
const weatherRoute = require('./src/weather');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/api/weather', weatherRoute);

app.listen(PORT, () => console.log(`Sever is running on PORT: ${PORT}`));
