const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(morgan());


const JwtRouter = require("./routes/jwt");
const authRouter = require("./routes/auth");
const mentorRouter = require("./routes/mentors");


app.use('/jwt', JwtRouter);
app.use('/auth', authRouter);
app.use('/mentors', mentorRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});