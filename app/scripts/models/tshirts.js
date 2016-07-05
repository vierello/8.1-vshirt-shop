var Backbone = require('backbone');

var TShirt = Backbone.Model.extend({

});

var TShirtCollection = Backbone.Collection.extend({
  model: TShirt,
});

module.exports = {
  'TShirt': TShirt,
  "TShirtCollection": TShirtCollection
};
