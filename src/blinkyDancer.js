// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };



var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
  //this.step();
  //this.setPosition(top, left);
  // return blinkyDancer;
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  makeDancer.prototype.step.call(this);

  //this.node.fadeOut(200);
  //this.$node.fadeIn(300);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};











// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   //console.log('this should be function', typeof(oldStep));
//   //console.log(oldStep);
//   //var oldStep = this.step;

//   //this.oldStep = this.step;
//   // return blinkyDancer;
// };

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// //makeBlinkyDancer.oldStep =
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// //makeBlinkyDancer.prototype.oldStep = Object.create(makeBlinkyDancer.step);
// //console.log(makeBlinkyDancer.prototype.oldStep);


// makeBlinkyDancer.prototype.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   //this.oldStep();
//   makeDancer.prototype.step.call(this);
//   //console.log(this.oldStep);
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };