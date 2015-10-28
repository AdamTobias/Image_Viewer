var FavoritesListView = Backbone.View.extend({
  
  id: 'FavoritesList',

  initialize: function(){

  },

  render: function(){
    var header = document.createElement('h4');
    header.textContent = 'Favorites';
    this.el.appendChild(header);
    //TODO: instantiate FavoritesListItemViews for each favorites list item
    return this.el;
  }
});