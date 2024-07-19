const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

// const mentorRouter = require('./controllers/mentors.js');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(morgan());


const JwtRouter = require("./controllers/jwt");
const usersRouter = require('./controllers/users');
const authRouter = require("./routes/auth");
const mentorRouter = require("./routes/mentors");
const profilesRouter = require('./controllers/profiles');


app.use('/jwt', JwtRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/mentors', mentorRouter);
app.use('/profiles', profilesRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});