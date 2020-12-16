(function (global) {

  // namespace for utilities
  var utils = {};

  var appTitle = "Bootstrap Practice";

  // Convenience function for inserting innerHTML for 'selector'
  function insertHtml (selector, html) {
      var targetElem = document.querySelector(selector);
      targetElem.innerHTML = html;
  };

  function updateTitle (heading) {
    var selector = "head > title";
    var newInnerHtml = heading + " - " + appTitle;
    insertHtml(selector, newInnerHtml);
  };

  utils.loadAndShowHome = function () {
    updateTitle("Home");
  };

  utils.loadAndShowTable = function () {
    updateTitle("Info Table");
  };

  utils.loadAndShowGallery = function () {
    updateTitle("Photo Gallery");
  };

  utils.loadAndShowCards = function () {
    updateTitle("Card Containers");
  };

  global.$utils = utils;

})(window);
