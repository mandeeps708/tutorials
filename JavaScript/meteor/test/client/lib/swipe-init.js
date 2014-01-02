Template.ImageSlider.events({
  'click .caseBack': function (event, template) {
     template._caseSlider.prev();
  },
  'click caseForward': function (event, template) {
     template._caseSlider.next();
  },
});

Template.ImageSlider.rendered = function () {
  var elem = this.find('#caseSlider');
  this._caseSlider = Swipe(elem, {
    startSlide: 1,
    speed: 400,
    auto: 3000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, elem) {},
    transitionEnd: function(index, elem) {}
  });
}