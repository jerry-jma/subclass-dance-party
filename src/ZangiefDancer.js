var makeZangiefDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="zangiefDancer"></span>');
  this.$userImg = $('<img class="zangiefDancer"></img>');
  this.$userImg.attr('src', 'img/Zangiefimage.png').appendTo(this.$node);
  this.setPosition(top, left);
};
makeZangiefDancer.prototype = Object.create(makeDancer.prototype);
makeZangiefDancer.prototype.constructor = makeZangiefDancer;

makeZangiefDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var oldPosition = [Math.floor(this.top), Math.floor(this.left)];
  var newPosition = [Math.floor($('body').height() * Math.random()), Math.floor($('body').width() * Math.random())];
  //console.log(newPosition[0], ' ', newPosition[1]);
  var distanceY = oldPosition[0] - newPosition[0];
  var distanceX = oldPosition[1] - newPosition[1];
  if (distanceX > 0) {
    //turn image around

  }

  var totalDistance = Math.floor(Math.sqrt((Math.pow(distanceY, 2)) + (Math.pow(distanceX, 2))));
  console.log(newPosition[0], newPosition[1]);
  /*
  this.$node.css({
    position: 'absolute',
    top: top,
    left: left,
  }).animate({
    top: newPosition[0],
    left: newPosition[1]
  });
  */
  this.top = newPosition[0];
  this.left = newPosition[1];
  //setPosition(this.top, this.left, newPosition[0], newPosition[1]);

  // make it flip/spin

};
