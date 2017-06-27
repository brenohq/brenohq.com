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
'use strict';

const config = {
  strings: ['tecnologia.', 'café.', 'software livre.', 'linhas de código.', 'linux.'],
  typeSpeed: 50,
  backSpeed: 55,
  startDelay: 500,
  backDelay: 1500,
  loop: true,
  showCursor: true,
  cursorChar: "|",

  onFinished: function() {
    console.log('Contribua: ' + 'https://github.com/luisvinicius167/ityped');
  }
}

ityped.init(`#ityped`, config);
$(function() {

  $("input,textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      // Prevent spam click and default submit behaviour
      $("#btnSubmit").attr("disabled", true);
      event.preventDefault();

      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message

      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $.ajax({
        url: "././mail/contact_me.php",
        type: "POST",
        data: {
          name: name,
          email: email,
          message: message
        },
        cache: false,
        success: function() {
          // Enable button & show success message
          $("#btnSubmit").attr("disabled", false);
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
          $('#success > .alert-success')
          .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
          .append('</div>');

          window.confirm("Mensagem Enviada!");
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
          $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
          $('#success > .alert-danger').append('</div>');

          window.confirm("Erro ao enviar mensagem! Tente novamente mais tarde.");
          //clear all fields
          $('#contactForm').trigger("reset");
        },
      })
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
  $('#success').html('');
});
