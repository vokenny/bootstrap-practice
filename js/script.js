$(function () { // Same as document.addEventListener('DOMContentLoaded'...

  const SCROLL_SPEED = 'slow'

  // On first load, show Home view
  $utils.loadAndShowHome();

  /*
  N.B. only collapses when the hamburger menu toggle is visible
  */
  $('#navbar-toggle').on('blur', function () {
    $('#navbar-menu').collapse('hide');
  });

  $('#to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, SCROLL_SPEED);
  })

  // Make nav items active, and load their corresponding snippet into #content 
  $('#nav-home').on('click', function () {
    $navUtils.applyActiveToMenuItem('#nav-home');
    $utils.loadAndShowHome();
    $('html, body').animate({ scrollTop: 0 }, SCROLL_SPEED);
  });

  $('#nav-table').on('click', function () {
    $navUtils.applyActiveToMenuItem('#nav-table');
    $utils.loadAndShowTable();
    $('html, body').animate({ scrollTop: 0 }, SCROLL_SPEED);
  });

  $('#nav-gallery').on('click', function () {
    $navUtils.applyActiveToMenuItem('#nav-gallery');
    $utils.loadAndShowGallery();
    $('html, body').animate({ scrollTop: 0 }, SCROLL_SPEED);
  });

  $('#nav-cards').on('click', function () {
    $navUtils.applyActiveToMenuItem('#nav-cards');
    $utils.loadAndShowCards();
    $('html, body').animate({ scrollTop: 0 }, SCROLL_SPEED);
  });

  $('#nav-form').on('click', function () {
    $navUtils.applyActiveToMenuItem('#nav-form');
    $utils.loadAndShowForm();
    $('html, body').animate({ scrollTop: 0 }, SCROLL_SPEED);
  });

});