const express = require('express');
const technologyapi = require('../Api/Technology');

const technology = express.Router();
technology.route('/technology').get(technologyapi.technologyDataFindFromDb);

module.exports = technology;