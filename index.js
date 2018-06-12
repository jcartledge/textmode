import {TextMode} from './lib/textMode.js';
import menu from './demos/menu.js';

const tm = new TextMode({hscale: 2, vscale: 3, numRows: 20});
document.body.appendChild(tm.canvas);
menu(tm);
window.tm = tm;
