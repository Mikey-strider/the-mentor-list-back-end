const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  review: {
    type: String,
  },
  profileId: {

  }
})

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
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

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;