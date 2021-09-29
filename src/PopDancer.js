var makePopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="popDancer"></span>');
  this.$userImg = $('<img class="popDancer"></img>');
  // $('pig').prepend('<img id="theImg" src="pigPopDancer.png" />');
  this.$userImg.attr('src', 'img/PigPopDancer.jpg').appendTo(this.$node);
  this.$node.addClass('mirror');

  this.setPosition(top, left);
};
makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // reflect Image
  this.$node.toggle();
};

makePopDancer.prototype.zoom = function() {
  this.$node.animate({width: '70%'}, 'slow');
};






