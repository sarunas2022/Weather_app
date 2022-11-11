const axios = require('axios');
const express = require('express');
require('dotenv').config();

const router = express.Router();

// route for current weather for chosen location
router.get('/current', async (req, res) => {
    try {
        const { city } = req.body;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
        );
        const currentWeatherData = response.data;
        res.json(currentWeatherData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// route for 5 days  weather forecast for chosen location
router.get('/5_days', async (req, res) => {
    try {
        const { city } = req.body;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
        );
        const forecastWeatherData = response.data;
        console.log(response);
        res.json(forecastWeatherData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
