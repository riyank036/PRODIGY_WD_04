const express = require('express');
const router = express.Router();
const { submitContactForm, getContactSubmissions } = require('../controllers/contactController');
const validate = require('../middleware/validate');
const contactSchema = require('../validators/contactValidator');

router.post('/', validate(contactSchema), submitContactForm);

router.get('/', getContactSubmissions);

module.exports = router; 