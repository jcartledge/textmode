function fontsDemo (tm, backToMenu) {
  tm.cls().println();
  tm.center('*** Fonts ***').println();
  for (let i = 32; i < 127; i++) {
    tm.print(String.fromCharCode(i));
  }
  tm.println().println('Press any key');
  tm.getKey().then(backToMenu);
}

export default fontsDemo;
