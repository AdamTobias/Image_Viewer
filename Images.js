var Images = Backbone.Collection.extend({
  inititalize: function(){

  },

  addImage: function(link, title){
    //create new image model and new image view with link and title
    this.add(new ImageModel({src:link, title:title}));
  }
})