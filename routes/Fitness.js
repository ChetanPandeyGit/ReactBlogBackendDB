const express = require('express');
const fitnessapi = require('../Api/Fitness');

const fitness = express.Router();
fitness.route('/fitness').get(fitnessapi.fitnessDataFindFromDb);

module.exports = fitness;