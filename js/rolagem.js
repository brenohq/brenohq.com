$(document).ready(function(){
    $('#fullpage').fullpage({
      	sectionsIds: ['#home', '#sobre', '#portfolio', '#contato'],
        anchors: ['sectionHome', 'sectionSobre', 'sectionPortfolio', 'sectionContato'],
        menu: '#navbar',
        fitToSection: true,
        continuousVertical: true,
        paddingTop: '3em'
    });
});
