const express = require('express');
const router = express.Router();
const certificationController = require('../controllers/certifications');

router.get('/',certificationController.getAllCertificates);

module.exports = router;