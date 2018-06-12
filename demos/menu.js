import drawMenu from '../util/drawMenu.js';
import eventsDemo from './events.js';
import colourCyclingDemo from './colourCycling.js';
import fontDemo from './font.js';
import inputDemo from './input.js';

const menuItems = [
  ['Events', eventsDemo],
  ['Colour cycling', colourCyclingDemo],
  ['Font', fontDemo],
  ['Input', inputDemo]
];

function menu (tm) {
  tm.cls();
  tm.println();
  tm.center('*** TEXTMODE ***');
  tm.println();
  drawMenu(tm, menuItems, _ => menu(tm));
}

export default menu;
