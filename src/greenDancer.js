var GreenDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(GreenDancer.prototype);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("greendancer");
  // the above line can be uncommented and will replace the next three statements
  // this.$node = $('<span class="dancer"></span>');
  // this.setPosition(top, left);

  // return this
};

GreenDancer.prototype = Object.create(Dancer.prototype);  // or new Dancer
GreenDancer.prototype.constructor = GreenDancer;
GreenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};