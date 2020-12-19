(function (global) {

  // namespace for utilities
  var utils = {};

  var appTitle = "Bootstrap Practice";
  
  var homeHtmlUrl = "snippets/home.html";
  var tableHtmlUrl = "snippets/table.html";
  var galleryHtmlUrl = "snippets/gallery.html";
  var cardsHtmlUrl = "snippets/cards.html";
  var formHtmlUrl = "snippets/form.html";
  var successAlertHtmlUrl = "snippets/success-alert.html";

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

  // Return substitute of '{{propName}}'
  // with propValue in given 'string'
  function insertProperty (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string
      .replace(new RegExp(propToReplace, "g"), propValue);
    return string;
  };

  function updateTitle (heading) {
    var selector = "head > title";
    var newInnerHtml = heading + " - " + appTitle;
    insertHtml(selector, newInnerHtml);
  };

  utils.loadAndShowHome = function () {
    updateTitle("Home");
    showLoading("#content");

    $ajax.sendGetRequest(
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

    $ajax.sendGetRequest(
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

    $ajax.sendGetRequest(
      galleryHtmlUrl,
      function (galleryHtml) {
        insertHtml("#content", galleryHtml);
      },
      false
    );
  };

  utils.loadAndShowCards = function () {
    updateTitle("Card Containers");
    showLoading("#content");

    $ajax.sendGetRequest(
      cardsHtmlUrl,
      function (cardsHtml) {
        insertHtml("#content", cardsHtml);
      },
      false
    );
  };

  utils.loadAndShowForm = function () {
    updateTitle("Form & Alert");
    showLoading("#content");

    $ajax.sendGetRequest(
      formHtmlUrl,
      function (formHtml) {
        insertHtml("#content", formHtml);
      },
      false
    );
  };

  // TODO: Add form validation on empty fields before showing success alert
  utils.showSuccessFormAlert = function () {
    var form = document.querySelector("#example-form");
    var formData = new FormData(form);

    $ajax.sendGetRequest(
      successAlertHtmlUrl,
      function (successAlertHtml) {
        var successAlertWithName = insertProperty(successAlertHtml, "fullname", formData.get("fullname"));
        var successAlertComplete = insertProperty(successAlertWithName, "email", formData.get("email"));
    
        insertHtml("#success-alert", successAlertComplete);
      },
      false
    );

    $("html, body").animate({ scrollTop: 0 }, "slow");
  };

  global.$utils = utils;

})(window);
