var BlinkyDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var parentStep = this.step;

  this.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    parentStep();
    
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    blinkyDancer.$node.toggle();
  };

  // return this
};

BlinkyDancer.prototype = new Dancer;
// Do I need to pass arguments top, left, timeBetweenSteps?  Consult MDN again on how best to pass arguments to Dancer