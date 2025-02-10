const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://hamidullah:<079857ha>@cluster0.tvzu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;

db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to database'));

app.listen(3000, () => console.log('Server Started'));
