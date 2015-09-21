var UserModel = require('mongoose').model('User');
var EventModel = require('mongoose').model('Event');

exports.seedEvents = function seedEvents() {

  EventModel.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      seedEvent('Category One', 'Event One');
      seedEvent('Category One', 'Event Two');
      seedEvent('Category Two', 'Event Three');
      seedEvent('Category Two', 'Event Four');
    }
  });

  function seedEvent(categoryTitle, EventTitle) {
    var parentCategory;
    CategoryModel.findOne({ title: categoryTitle }).exec()
      .then(function (category) {
        parentCategory = category;
        return EventModel.create({ title: EventTitle, _category: parentCategory._id });
      }).then(function (Event) {
        parentCategory.Events.push(Event._id);
        parentCategory.save(function (saveError) {
          if (!saveError) {
            console.log("Seeded Event");
          } else {
            console.log(saveError);
          }
        });
      });
  }
};