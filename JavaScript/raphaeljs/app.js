function Timeline(domID, width, height) {
  if ( !(this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  
  var self = this;

  self.drawDotAndLabel = function (release, xOffset) {

    var paper = Raphael('timeline', 940, 81);
    var dot;
    dot = paper.circle(470, 40, 20);
    dot.attr({
       'stroke-width': 0
    ,  'fill':        '#cccccc'
    ,  'fill-opacity': 1.0
  });
  };
}
