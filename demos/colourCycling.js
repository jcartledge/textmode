function colourCyclingDemo (tm, backToMenu) {
  tm.cls().println();
  tm.center('*** Colour Cycling ***');
  tm.println().println('Press any key');
  tm.getKey().then(backToMenu);
}

export default colourCyclingDemo;

