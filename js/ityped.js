const config = {
  strings: ['tecnologia.', 'café.', 'software livre.', 'linhas de código.', 'linux.'],
  typeSpeed: 50,
  backSpeed: 55,
  startDelay: 500,
  backDelay: 2500,
  loop: true,
  showCursor: true,
  cursorChar: "|",

  onFinished: function() {
    console.log('Contribua: ' + 'https://github.com/luisvinicius167/ityped');
  }
}

ityped.init(`#ityped`, config);