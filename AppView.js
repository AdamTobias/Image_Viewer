var AppView = Backbone.View.extend({

  el: 'body',

  initialize: function(){
    this.formView = new FormView();
    this.imageListView = new ImageListView({collection: this.model.get('images')});
    this.imageView = new ImageView();
    this.render();
    this.formView.on('submit', this.model.get('images').addImage, this.model.get('images'));
    this.model.get('images').on('displayMe', this.imageView.updateImage, this.imageView);
    this.imageView.on('rateImage', this.helpFunc);
  },

  helpFunc: function(){
    console.log('it worked?');
  },

  render: function(){
    var html = '';
    this.el.appendChild(this.formView.render());
    this.el.appendChild(this.imageListView.render());
    this.el.appendChild(new FavoritesListView().render());
    this.el.appendChild(this.imageView.render());
    //html += new ImageListView(new ImageListModel()).render() 
    //html += new FavoritesListView.render(new FavoritesList())
    //html += new ImageView(new ImageModel()).render()
    //this.el.innerHTML = html;
  }
});