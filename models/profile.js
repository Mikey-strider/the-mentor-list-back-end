const mongoose = require('mongoose');

const mentorSchema = mongoose.Schema({
  profileId: {
    type: ObjectId,
  },
  profileName: {
    type: String,
    required: true,
  },
})
const MentorModel = mongoose.model('Profile', mentorSchema);
module.exports = MentorModel;