function inputDemo (tm, backToMenu) {
  tm.cls().println();
  tm.center('*** Input ***');
  tm.println().center('Enter "Quit" to return to the menu.');
  tm.println();
  function getInput () {
    tm.inputln('Ok ').then(str => {
      const upcase = str.toUpperCase();
      if (upcase == 'QUIT') {
        backToMenu();
      } else {
        tm.println(upcase);
        getInput();
      }
    });
  }
  getInput();
}

export default inputDemo;
