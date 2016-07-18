var Backbone = require('backbone');

var TShirt = Backbone.Model.extend({
  displayPrice: function(){
    return '$' + (this.get('price') / 100).toFixed(2)
  }
});

var TShirtCollection = Backbone.Collection.extend({
  model: TShirt,
});

var CartCollection = Backbone.Collection.extend({
  model: TShirt,

});

module.exports = {
  'TShirt': TShirt,
  "TShirtCollection": TShirtCollection,
  'CartCollection': CartCollection
};
