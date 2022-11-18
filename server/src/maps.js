const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { x, y } = req.query;
        const response = await axios.get(
            `https://tile.openweathermap.org/map/clouds_new/1/${x}/${y}.png?appid=${process.env.WEATHER_API_KEY}`
        );
        const map = response.data;
        res.json(map);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
