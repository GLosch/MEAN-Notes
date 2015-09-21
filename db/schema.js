// Currently redundant against code in server.js file

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    db = mongoose.connection;

var UserSchema = new Schema({
  name: String,
  email: String,
  username: {
    type: String,
    unique: true
  }
});

var EventSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  people: {
    type: String,
    default: '',
    trim: true
  },
  links: {
    type: String,
    default: '',
    trim: true
  },
  followUp: {
    type: String,
    default: '',
    trim: true
  },
  other: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

module.exports = {
  User: mongoose.model('User', UserSchema),
  Event: mongoose.model('Event', EventSchema)
};

// var schema = {
//   buildSchema: function(){
//     db.once('open', function (cb) {
//       console.log("database connection open");

//       userSchema = mongoose.Schema({
//         username: String,
//         password: String
//       });

//       var cardSchema = mongoose.Schema({
//         name: String,
//         date: Date,
//         description: String,
//         people: String,
//         links: String,
//         followup: String,
//         other: String
//       });
//     });
//   }
// };

// module.exports = schema;
