var ImageModel = Backbone.Model.extend({
  
  defaults: {
    rating: -1
  },

  initialize: function(){
  },

  display: function(){
    this.trigger('displayMe', this);
  }


})