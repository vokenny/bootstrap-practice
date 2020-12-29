(function (global) {

  var navUtils = {};

  const ACTIVE_CLASS = 'active'

  function removeActiveFromNavbarMenuItems () {
    var menuItems = document.querySelectorAll('.nav-link');

    menuItems.forEach(function (item) {
      var classes = item.className.replace(new RegExp(ACTIVE_CLASS, 'g'), '');
      item.className = classes
    });
  }

  navUtils.applyActiveToMenuItem = function (selector) {
    removeActiveFromNavbarMenuItems();

    var elem = document.querySelector(selector);
    var classes = elem.className;

    // if 'active' class is not present
    if (classes.indexOf(ACTIVE_CLASS) === -1) {
      classes += ' ' + ACTIVE_CLASS;
      elem.className = classes;
    }
  };

  global.$navUtils = navUtils;

})(window);
