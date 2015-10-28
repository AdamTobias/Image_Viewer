var AppView = Backbone.View.extend({

  el: 'body',

  initialize: function(){
    this.render();
  },

  render: function(){
    var html = '';
    this.el.appendChild(new FormView().render());
    this.el.appendChild(new ImageListView().render());
    this.el.appendChild(new FavoritesListView().render());
    this.el.appendChild(new ImageView().render());
    //html += new ImageListView(new ImageListModel()).render() 
    //html += new FavoritesListView.render(new FavoritesList())
    //html += new ImageView(new ImageModel()).render()
    //this.el.innerHTML = html;
  }
});