require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const studentRouter = require('./routes/studentRoutes');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use('/api/v1/students', studentRouter);

app.listen(3000, () => console.log('Server Started'));
