const express = require("express");
const cors = require('cors');
const bodyparser = require('body-parser')
const home = require('./routes/Home')
const bollywood = require('./routes/Bollywood')
const hollywood = require('./routes/Hollywood')
const technology = require('./routes/Technology')
const fitness = require('./routes/Fitness')
const science = require('./routes/Science')
const connect = require('./database/mongoose')
const app = express();

app.use(cors())
app.use(bodyparser.json())
app.use('/', home);
app.use('/',bollywood);
app.use('/',hollywood);
app.use('/',technology);
app.use('/',fitness);
app.use('/',science);

app.listen(3001, async() => {
    await connect();
    console.log('App is running at http://localhost:3001');
})