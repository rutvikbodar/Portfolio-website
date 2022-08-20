const express = require('express');
const skillcontroller = require('../controllers/skill')

const router = express.Router();

router.get('/',skillcontroller.getSkills);

module.exports = router;