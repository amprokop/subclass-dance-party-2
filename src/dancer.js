var Dancer = function(top, left, timeBetweenSteps){
  // I should be able to define my methods here in the object literal rather than define them in Dancer.prototype later, right?
  // this = Object.create(Dancer.prototype);

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>')
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  // return this;
};

Dancer.prototype.step = function () {
  var instance = this;
  console.log("calling step")
  setTimeout(function(){ instance.step(); }, this.timeBetweenSteps);
}

Dancer.prototype.setPosition = function(top, left){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};