const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
const weatherRoute = require('./src/weather');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/weather', weatherRoute);

app.listen(PORT, () => console.log(`Sever is running on PORT: ${PORT}`));
