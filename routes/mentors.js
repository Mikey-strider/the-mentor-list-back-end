const express = require('express');
const router = express.Router();
const mentorProfile = require('../controllers/mentors');



router.delete('/:id', mentorProfile.deleteMentor);
router.put('/:id', mentorProfile.editMentor);
router.get('/:id', mentorProfile.getMentor);
router.post('/', mentorProfile.createMentor);
router.get('/', mentorProfile.indexMentors);



module.exports = router;