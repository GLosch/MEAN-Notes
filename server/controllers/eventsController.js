var mongoose = require('mongoose');

module.exports = mongoose.model('Event', {
  name: { type: String }
});