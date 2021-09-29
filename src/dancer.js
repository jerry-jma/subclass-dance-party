// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {
//   var dancer = {};
//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);
//   return dancer;
// };

// make all methods outside


var makeDancer = function(top, left, timeBetweenSteps) {
  //var dancer = {};
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  //this.top = top;
  //this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //debugger;
  this.step();
  this.setPosition(top, left);
  this.mouseOver();

  // return dancer;

};

makeDancer.prototype.mouseOver = function() {
  var self = this;
  this.$node.mouseover(function() {
  // alert('That\'s a blinkyDancer!');
    var changeWhite = {
      border: '10px solid white'
    };
    //alert(this);
    self.$node.css(changeWhite);

  //this.css('color', 'lightgreen');
  });
  // alert('mouseover Event!');
  // $(this).css('visibility', 'visible');
  //var changeWhite = {
  //    color: 'white'
  //  };

  //  this.$node.css(changeWhite);

};

makeDancer.prototype.lineup = function(y, x) {
  //more research
  this.setPosition(y, x);
};

makeDancer.prototype.step = function() {

  // the basic dancer doesn't do anything interesting at all on each step,
  //console.log(this.step);
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

  //setTimeout(function() {
  //  this.step.call(this);
  //}, this.timeBetweenSteps);

  //setTimeout(function() {
  //  makeDancer.prototype.step.call(this);
  //}, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

