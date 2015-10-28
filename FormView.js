var FormView = Backbone.View.extend({
  
  tagName: 'form',
  
  events: {
    'click button': 'submitForm'
  },

  submitForm: function(e){
    e.preventDefault();
  },

  initialize: function(){
  },

  render: function(){
    this.el.innerHTML += '<label for="linkInput">Image Link:</label><input id="linkInput">' +
                         '<label for="titleInput">Image Title:</label><input id="titleInput">' +
                         '<button>Save</button>'
    return this.el;
  } 
});