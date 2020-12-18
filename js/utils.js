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

    $ajaxUtils.sendGetRequest(
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

    $ajaxUtils.sendGetRequest(
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

    $ajaxUtils.sendGetRequest(
      formHtmlUrl,
      function (formHtml) {
        insertHtml("#content", formHtml);
      },
      false
    );
  };

  // TODO: Add form validation on empty fields before showing success alert
  utils.showSuccessFormAlert = function () {
    var fullName = document.querySelector("#input-fullname").value;
    var emailAddress = document.querySelector("#input-email").value;

    $ajaxUtils.sendGetRequest(
      successAlertHtmlUrl,
      function (successAlertHtml) {
        var successAlertWithName = insertProperty(successAlertHtml, "fullname", fullName);
        var successAlertComplete = insertProperty(successAlertWithName, "email", emailAddress);
    
        insertHtml("#success-alert", successAlertComplete);
      },
      false
    );
  };

  global.$utils = utils;

})(window);
