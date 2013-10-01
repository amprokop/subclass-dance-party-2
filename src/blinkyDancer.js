var BlinkyDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  Dancer.call(this, top, left, timeBetweenSteps);
  // the above line can be uncommented and will replace the next three statements
  // this.$node = $('<span class="dancer"></span>');
  // this.setPosition(top, left);

  // return this
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);  // or new Dancer
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.css({"border": "1px" , "border-radius" : "140px"});

  this.$node.animate({
    opacity: 0.7,
    height: "toggle"
  }, 1000);
};
