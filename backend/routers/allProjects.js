const express = require('express');
const router = express.Router();
const allProjectsController = require('../controllers/allProjects');

router.get('/',allProjectsController.getAllProjets);

module.exports = router;