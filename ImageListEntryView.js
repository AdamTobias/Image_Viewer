var ImageListEntryView = Backbone.View.extend({
  initialize: function(){

  },

  events:{
    'click': 'clickHandler'
  },

  clickHandler: function(){
    this.model.display();
  },

  render: function(){
    this.el.textContent = this.model.get('title');
    this.el.className = 'ImageListItem'
    return this.el;
  }
});