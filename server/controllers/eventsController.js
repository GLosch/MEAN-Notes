var mongoose = require('mongoose');

module.exports = mongoose.model('Event', {
  name: { type: String },
  date: {type: Date},
  description: {type: String},
  people: {type: String},
  links: {type: String},
  followUp: {type: String},
  other: {type: String}
});