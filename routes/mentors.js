const express = require('express');
const router = express.Router();
const mentorProfile = require('../controllers/mentors');

const verifyToken = require('../middleware/verify-token');


router.get('/:userId', verifyToken, mentorProfile.profile);


module.exports = router;