import drawMenu from '../util/drawMenu.js';
import eventsDemo from './events.js';
const colourCyclingDemo = _ => console.log('colourCycling');
const fontsDemo = _ => console.log('fonts');
const inputDemo = _ => console.log('input');

const menuItems = [
  ['1. Events', eventsDemo],
  ['2. Colour cycling', colourCyclingDemo],
  ['3. Fonts', fontsDemo],
  ['4. Input', inputDemo]
];

function menu(tm) {
  tm.cls();
  tm.moveTo(0, 0);
  tm.println();
  tm.center('*** TEXTMODE ***');
  tm.println();
  drawMenu(tm, menuItems, _ => menu(tm));
}

export default menu;
