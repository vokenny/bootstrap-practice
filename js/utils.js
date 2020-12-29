(function (global) {

  // namespace for utilities
  var utils = {};

  const APP_TITLE = 'Bootstrap Practice';
  const MAIN_CONTENT_ID = '#content'
  
  const HOME_HTML_URL = 'snippets/home.html';
  const TABLE_HTML_URL = 'snippets/table.html';
  const GALLERY_HTML_URL = 'snippets/gallery.html';
  const CARDS_HTML_URL = 'snippets/cards.html';
  const FORM_HTML_URL = 'snippets/form.html';
  const SUCCESS_ALERT_HTML_URL = 'snippets/success-alert.html';

  // Convenience function for inserting innerHTML for 'selector'
  function insertHtml (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  }

  // Show loading icon inside element identified by 'selector'
  function showLoading (selector) {
    var html = '<div class="text-center">';
    html += '<img id="ajax-loader" src="assets/images/ajax-loader.gif"></div>';
    insertHtml(selector, html);
  }

  // Return substitute of '{{propName}}'
  // with propValue in given 'string'
  function insertProperty (string, propName, propValue) {
    var propToReplace = '{{' + propName + '}}';
    string = string
      .replace(new RegExp(propToReplace, 'g'), propValue);
    return string;
  }

  function updateTitle (heading) {
    var selector = 'head > title';
    var newInnerHtml = heading + ' - ' + APP_TITLE;
    insertHtml(selector, newInnerHtml);
  }

  utils.loadAndShowHome = function () {
    updateTitle('Home');
    showLoading(MAIN_CONTENT_ID);

    $ajax.sendGetRequest(
      HOME_HTML_URL,
      function (homeHtml) {
        insertHtml(MAIN_CONTENT_ID, homeHtml);
      },
      false
    );
  };

  utils.loadAndShowTable = function () {
    updateTitle('Info Table');
    showLoading(MAIN_CONTENT_ID);

    $ajax.sendGetRequest(
      TABLE_HTML_URL,
      function (tableHtml) {
        insertHtml(MAIN_CONTENT_ID, tableHtml);
      },
      false
    );
  };

  utils.loadAndShowGallery = function () {
    updateTitle('Photo Gallery');
    showLoading(MAIN_CONTENT_ID);

    $ajax.sendGetRequest(
      GALLERY_HTML_URL,
      function (galleryHtml) {
        insertHtml(MAIN_CONTENT_ID, galleryHtml);
      },
      false
    );
  };

  utils.loadAndShowCards = function () {
    updateTitle('Card Containers');
    showLoading(MAIN_CONTENT_ID);

    $ajax.sendGetRequest(
      CARDS_HTML_URL,
      function (cardsHtml) {
        insertHtml(MAIN_CONTENT_ID, cardsHtml);
      },
      false
    );
  };

  utils.loadAndShowForm = function () {
    updateTitle('Form & Alert');
    showLoading(MAIN_CONTENT_ID);

    $ajax.sendGetRequest(
      FORM_HTML_URL,
      function (formHtml) {
        insertHtml(MAIN_CONTENT_ID, formHtml);
      },
      false
    );
  };

  utils.validateForm = function () {
    // Set whole form to neutral state first upon submission before validating
    resetFormState();

    var form = document.querySelector('#example-form');
    var formData = new FormData(form);

    for (var pair of formData.entries()) {
      switch (pair[0]) {
        case 'input-fullname':
          checkFullName(pair);
          break;
        case 'input-email':
          checkEmail(pair);
          break;
      }
    }

    // If all form inputs have 'is-valid', then show the succcess alert
    var formArray = Array.from(document.querySelectorAll('.form-control'));
    var isValidForm = formArray.every(checkForIsValidClass);

    if (isValidForm) {
      showSuccessFormAlert(formData);
    } else {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    }
  };

  function resetFormState () {
    document.querySelector('#success-alert').innerHTML = '';

    document.querySelectorAll('.form-control').forEach(function (elem) {
      elem.classList.remove('is-valid');
      elem.classList.remove('is-invalid');
    });
    
    // Hide the error messages
    document.querySelectorAll('.invalid-feedback').forEach(function (elem) {
      elem.style.display = 'none';
    });
  }

  function checkFullName (pair) {
    if (pair[1] === '' || pair[1].length > 100) {
      applyValidityClass(false, pair[0]);
      displayError(pair[0]);
    } else {
      applyValidityClass(true, pair[0]);
    }
  }

  function checkEmail (pair) {
    // Regex from https://www.w3resource.com/javascript/form/email-validation.php
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (pair[1] === '' || !pair[1].match(emailRegex)) {
      applyValidityClass(false, pair[0]);
      displayError(pair[0]);
    } else {
      applyValidityClass(true, pair[0]);
    }
  }

  function applyValidityClass (isValid, selector) {
    var elem = document.querySelector('#' + selector);
    var classes = elem.className;
    var validity = isValid ? ' is-valid' : ' is-invalid';

    classes += validity;
    elem.className = classes;
  }

  function displayError (selector) {
    document.querySelector('#' + selector + ' + .invalid-feedback').style.display = 'block';
  }

  function checkForIsValidClass (elem) {
    return elem.classList.contains('is-valid');
  }

  function showSuccessFormAlert (formData) {
    $ajax.sendGetRequest(
      SUCCESS_ALERT_HTML_URL,
      function (successAlertHtml) {
        var successAlertWithName = insertProperty(successAlertHtml, 'fullname', formData.get('input-fullname'));
        var successAlertComplete = insertProperty(successAlertWithName, 'email', formData.get('input-email'));
    
        insertHtml('#success-alert', successAlertComplete);
      },
      false
    )

    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  global.$utils = utils;

})(window);
