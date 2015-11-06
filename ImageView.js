var ImageView = Backbone.View.extend({
  
  id: 'ImageView',

  events: {
    'click .heart': 'heartClick'
  },

  heartClick: function(event){
    var heartNum = event.target.getAttribute('data-number');
    var hearts = this.el.querySelectorAll('img[data-number]');
    for(var i = 0; i < hearts.length; i++){
      if (hearts[i].getAttribute('data-number') <= heartNum){
        hearts[i].src = './images/FullHeart.png';
      } else {
        hearts[i].src = './images/EmptyHeart.png';
      }   
    }
    this.trigger('rateImage');
  },

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

    /*var heart = document.createElement('img');
    heart.className = 'heart';
    heart.src = './images/EmptyHeart.png';
    heart.style.float = 'right';
    this.el.appendChild(heart);

    var heart2 = document.createElement('img');
    heart2.className = 'heart';
    heart2.src = './images/EmptyHeart.png';
    heart2.style.float = 'right';
    this.el.appendChild(heart2);

    var heart3 = document.createElement('img');
    heart3.className = 'heart';
    heart3.src = './images/EmptyHeart.png';
    heart3.style.float = 'right';
    this.el.appendChild(heart3);

    var heart4 = document.createElement('img');
    heart4.className = 'heart';
    heart4.src = './images/EmptyHeart.png';
    heart4.style.float = 'right';
    this.el.appendChild(heart4);

    var heart5 = document.createElement('img');
    heart5.className = 'heart';
    heart5.src = './images/EmptyHeart.png';
    heart5.style.float = 'right';
    this.el.appendChild(heart5);*/

    for(var i = 4; i >= 0; i--){
      this.el.appendChild(this.makeHeart(i));
    }

    var rating = document.createElement('div');
    rating.textContent = 'Rating:';
    rating.style.float = 'right';
    this.el.appendChild(rating);

    return this.el;
  },
  
  makeHeart: function(number){
    
    var heart = document.createElement('img');
    heart.className = 'heart';
    heart.src = './images/EmptyHeart.png';
    heart.style.float = 'right';
    heart.setAttribute('data-number', number);
    return heart;
  }
  
});