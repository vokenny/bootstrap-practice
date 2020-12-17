$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  // On first load, show Home view
  $utils.loadAndShowHome();

  // N.B. only collapses under the threshold, therefore if you:
  // 1. expand navbar toggle
  // 2. increase width above threshold
  // 3. lose focus on navbar
  // 4. then decrease width
  // then it will *still be expanded*
  $("#navbar-toggle").on("blur", function () {
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      $("#navbar-menu").collapse('hide');
    }
  });

  $("#to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  })

  // Make nav items active, and load their corresponding snippet into #content 
  $("#nav-home").on("click", function () {
    $navUtils.applyActiveToMenuItem("#nav-home");
    $utils.loadAndShowHome();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $("#nav-table").on("click", function () {
    $navUtils.applyActiveToMenuItem("#nav-table");
    $utils.loadAndShowTable();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $("#nav-gallery").on("click", function () {
    $navUtils.applyActiveToMenuItem("#nav-gallery");
    $utils.loadAndShowGallery();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $("#nav-cards").on("click", function () {
    $navUtils.applyActiveToMenuItem("#nav-cards");
    $utils.loadAndShowCards();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});