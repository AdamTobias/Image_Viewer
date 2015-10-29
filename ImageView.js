var ImageView = Backbone.View.extend({
  
  id: 'ImageView',

  initialize: function(){
  },

  updateImage: function(model){
    console.log('src = ' + model.get('src'));
    this.el.querySelector('img').src = model.get('src');
    this.el.children[1].textContent = model.get('title');
  },

  render: function(){
    var image = document.createElement('img');
    image.id = 'Image';
    image.src = './tooter.JPG';
    this.el.appendChild(image);

    var imageLabel = document.createElement('div');
    imageLabel.textContent = 'Image Label';
    imageLabel.style.display = 'inline';
    this.el.appendChild(imageLabel);

    var rating = document.createElement('div');
    rating.textContent = 'Rating <3 <3 <3 <3 <3';
    rating.style.float = 'right';
    this.el.appendChild(rating);

    return this.el;
  }

});