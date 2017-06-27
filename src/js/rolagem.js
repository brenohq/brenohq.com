$(document).ready(function () {
  $('#fullpage').fullpage({
    sectionsIds: ['#home', '#sobre', '#portfolio', '#contato'],
    anchors: ['sectionHome', 'sectionSobre', 'sectionPortfolio', 'sectionContato'],
    menu: '#navbar',
    fitToSection: true
  });
});

$(document).ready(function () {
  $('.carousel').carousel({
    duration: 300,
    dist: -50,
    shift: 50,
    noWrap: true,
    fullWidth: true
  });
});