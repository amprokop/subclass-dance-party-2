var Dancer = function(top, left, timeBetweenSteps){
  var instance = this;
  this.$node = $('<span class="dancer"> <img src="./src/danny-glover.jpg" alt="Danny" height="200" width = "200"> </span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.$node.on("mouseover", function() {
    instance.$node.remove();
    var remove = function(){
      for (var i=0; i<window.dancers.length; i++) {
        if (window.dancers[i] === instance) {
          window.dancers.splice(i,1);
        }
      }
    }();
  });
};



Dancer.prototype.step = function () {
  var instance = this;
  setTimeout(function(){ instance.step(); }, this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function(){
  this.setPosition($("body").height() * Math.random(), 0)
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