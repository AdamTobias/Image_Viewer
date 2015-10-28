var ImageListView = Backbone.View.extend({
  
  id: 'ImageList',

  initialize: function(){

  },

  render: function(){
    var header = document.createElement('h4');
    header.textContent = 'Images';
    this.el.appendChild(header);
    //TODO: instantiate ImageListItemViews for each image list item
    return this.el;
  }
});