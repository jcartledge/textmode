import {TextMode} from './lib/textMode.js';
import menu from './demos/menu.js';

const tm = new TextMode({hscale: 2, vscale: 3, numRows: 20});
document.body.appendChild(tm.canvas);
menu(tm);
window.tm = tm;

// tm.canvas.addEventListener('textModeBeforeRenderChar', e => {
//   const {args} = event.detail;
//   if (args.asciiCode) {
//     args.bg = args.asciiCode % 8;
//   }
// });
//
// tm.canvas.addEventListener('textModeBeforeRenderCharRow', e => {
//   const {args} = event.detail;
//   if (args.asciiCode) {
//     args.fg = args.charRowIndex % 7 + 1;
//   }
// });
//
// for (let i = 32; i < 127; i++) {
//   tm.print(String.fromCharCode(i));
// }
//
// function getInput () {
//   tm.inputln('Ok ').then(str => tm.println(str.toUpperCase()) && getInput());
// }
//
// getInput();
//
