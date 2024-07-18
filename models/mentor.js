const mongoose = require('mongoose');

const mentorSchema = mongoose.Schema({
  // mentorId: {
  //   type: ObjectId,
  // },
  mentorName: {
    type: String,
    required: true,
  },
})
const MentorModel = mongoose.model('Profile', mentorSchema);
module.exports = MentorModel;