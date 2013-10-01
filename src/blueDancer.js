var BlueDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlueDancer.prototype);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("bluedancer");


  function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
  // the above line can be uncommented and will replace the next three statements
  // this.$node = $('<span class="dancer"></span>');
  // this.setPosition(top, left);

  // return this
};

BlueDancer.prototype = Object.create(Dancer.prototype);  // or new Dancer
BlueDancer.prototype.constructor = BlueDancer;
BlueDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeIn();
  this.$node.fadeOut();
};