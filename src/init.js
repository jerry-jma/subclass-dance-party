$(document).ready(function() {
  window.dancers = [];
  $('.lineUp').on('click', function(event) {
    var x = 0;
    var y = $('body').height() / 2;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineup(y, x);
      x += 100;
    }
  });

  //Add ZangiefDancer
  $('.addZangiefButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(), // top
      $('body').width() * Math.random(), //left
      3000 //timeBetweenSteps
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window);
  });

  //Add PopDancer
  $('.addPopDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(), // top
      $('body').width() * Math.random(), //left
      Math.random() * 1000 //timeBetweenSteps
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    //console.log(window);
    //console.log('window dancers ', window.dancers);
  });







  //Lineup
  //iterate through array calling setPosition on each one

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(), // top
      $('body').width() * Math.random(), //left
      Math.random() * 1000 //timeBetweenSteps
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window);

  });
  /*
  $('.addDancerButton').mouseover(function() {
    alert('mouseover Event!');
    this.css({
      color: white
    });
  });
*/
  $('.addDancerButton').mouseover(function() {
    dancer.changeColor();
  });

});

