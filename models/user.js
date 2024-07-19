const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  review: {
    type: String,
  },
  mentorId: {
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MentorModel',
    },
  },
})

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  education: {
    type: String,
  },
  aboutMe: {
    type: String,
  },
  profileImage: {
    type: String,
  },
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      delete returnedObject.hashedPassword;
  }
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;