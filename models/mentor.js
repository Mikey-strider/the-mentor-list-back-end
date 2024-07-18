const mongoose = require('mongoose');

const mentorSchema = mongoose.Schema({
  // mentorId: {
  //   type: ObjectId,
  // },
  mentorName: {
    type: String,
    required: true,
  },
  educationType: {
    type: String,
  },
  aboutMe: {
    type: String,
  },
})
const MentorModel = mongoose.model('Profile', mentorSchema);
module.exports = MentorModel;