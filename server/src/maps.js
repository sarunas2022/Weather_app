const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { city } = req.query;
        const response = await axios.get(
            `http://api.positionstack.com/v1/forward?access_key=${process.env.MAPS_API_KEY}&query=${city}&results.map_url`
        );
        const map = response.data;
        console.log(map);
        res.json(map);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
