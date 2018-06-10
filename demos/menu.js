import drawMenu from '../util/drawMenu.js';
import eventsDemo from './events.js';
import colourCyclingDemo from './colourCycling.js';
import fontsDemo from './fonts.js';
import inputDemo from './input.js';

const menuItems = [
  ['1. Events', eventsDemo],
  ['2. Colour cycling', colourCyclingDemo],
  ['3. Fonts', fontsDemo],
  ['4. Input', inputDemo]
];

function menu(tm) {
  tm.cls();
  tm.println();
  tm.center('*** TEXTMODE ***');
  tm.println();
  drawMenu(tm, menuItems, _ => menu(tm));
}

export default menu;
