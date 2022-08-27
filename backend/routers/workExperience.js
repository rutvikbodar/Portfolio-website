const express = require('express');
const workExperience = require('../controllers/workExperience');
const route = express.Router();

route.get('/',workExperience.getExperience);

module.exports = route;