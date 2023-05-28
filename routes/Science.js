const express = require('express');
const scienceapi = require('../Api/Science');

const science = express.Router();
science.route('/science').get(scienceapi.scienceDataFindFromDb);

module.exports = science;