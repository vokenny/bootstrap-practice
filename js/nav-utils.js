(function (global) {

  var navUtils = {};

  function removeActiveFromNavbarMenuItems () {
    var menuItems = document.querySelectorAll(".nav-link");

    menuItems.forEach(function (item, index, menu) {
      classes = item.className.replace(new RegExp("active", "g"), "");
      item.className = classes
    });
  };

  navUtils.applyActiveToMenuItem = function (selector) {
    removeActiveFromNavbarMenuItems();

    var elem = document.querySelector(selector);
    var classes = elem.className;

    if (classes.indexOf("active") === -1) {
      classes += " active";
      elem.className = classes;
    };
  };

  global.$navUtils = navUtils;

})(window);
