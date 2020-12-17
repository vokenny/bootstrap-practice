(function (global) {

  // namespace for utilities
  var utils = {};

  var appTitle = "Bootstrap Practice";
  
  var homeHtmlUrl = "snippets/home.html";
  var tableHtmlUrl = "snippets/table.html";

  // Convenience function for inserting innerHTML for 'selector'
  function insertHtml (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  // Show loading icon inside element identified by 'selector'
  function showLoading (selector) {
    var html = "<div class='text-center'>";
    html += "<img id='ajax-loader' src='assets/images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };

  function updateTitle (heading) {
    var selector = "head > title";
    var newInnerHtml = heading + " - " + appTitle;
    insertHtml(selector, newInnerHtml);
  };

  utils.loadAndShowHome = function () {
    updateTitle("Home");
    showLoading("#content");

    $ajaxUtils.sendGetRequest(
      homeHtmlUrl,
      function (homeHtml) {
        insertHtml("#content", homeHtml);
      },
      false
    );
  };

  utils.loadAndShowTable = function () {
    updateTitle("Info Table");
    showLoading("#content");

    $ajaxUtils.sendGetRequest(
      tableHtmlUrl,
      function (tableHtml) {
        insertHtml("#content", tableHtml);
      },
      false
    );
  };

  utils.loadAndShowGallery = function () {
    updateTitle("Photo Gallery");
    showLoading("#content");
  };

  utils.loadAndShowCards = function () {
    updateTitle("Card Containers");
    showLoading("#content");
  };

  global.$utils = utils;

})(window);
