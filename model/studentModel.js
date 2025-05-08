// const mongoose = require('mongoose');

// const subscriberSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   subscriberChannel: {
//     type: String,
//     required: true,
//   },
//   subscriberDate: {
//     type: Date,
//     required: true,
//     default: Date.now(),
//   },
// });

// module.exports = mongoose.model('subscribers', subscriberSchema);

const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Student must have a name!'],
  },
  id: {
    type: Number,
    required: [true, 'Student must have an ID!'],
  },
  department: {
    type: String,
    required: [true, 'Student must have a Department!'],
  },
});

const Student = mongoose.model('Student', studentsSchema);

module.exports = Student;
