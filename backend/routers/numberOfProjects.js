const express = require('express');
const numberOfProjects = require('../controllers/numberOfProjets');

const Router = express.Router();

Router.get('/',numberOfProjects.getNumberOfProjects);

module.exports = Router;