const express = require('express');
require('dotenv').config();
const cors = require('cors');
const weatherRoute = require('./src/weather');

const PORT = process.env.PORT || 3000;

const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/weather', weatherRoute);

// this is to get all front end data to be taken and used in nodejs
// app.use(express.static(path.join(__dirname + '/public')));

// second version - not working
// app.use(express.static('build'));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });

app.listen(PORT, () => console.log(`Sever is running on PORT: ${PORT}`));
