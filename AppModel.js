var AppModel = Backbone.Model.extend({

  initialize: function(){
    //declare a favorites collection
    //declare an images collection
    this.set('images', new Images());
  },

})