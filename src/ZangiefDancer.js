var makeZangiefDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="zangiefDancer"></span>');
  this.setPosition(top, left);
};
makeZangiefDancer.prototype = Object.create(makeDancer.prototype);
makeZangiefDancer.prototype.constructor = makeZangiefDancer;

makeZangiefDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  // 2x speed
};


// make it flip/spin


