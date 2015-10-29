var ImageListView = Backbone.View.extend({
  
  id: 'ImageList',

  initialize: function(){
    this.collection.on('add', this.addListItem, this);
  },

  addListItem: function(newItem){
    this.el.appendChild((new ImageListEntryView({model:newItem})).render());
  },

  render: function(){
    var header = document.createElement('h4');
    header.textContent = 'Images';
    this.el.appendChild(header);
    return this.el;
  }
});