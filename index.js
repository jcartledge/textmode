import {TextMode} from './lib/textMode.js';

const tm = new TextMode();
document.body.appendChild(tm.canvas);

tm.canvas.addEventListener('textModeBeforeRenderChar', e => {
  const {args} = event.detail;
  if (args.asciiCode) {
    args.bg = args.asciiCode % 8;
  }
});

tm.canvas.addEventListener('textModeBeforeRenderCharRow', e => {
  const {args} = event.detail;
  if (args.asciiCode) {
    args.fg = args.charRowIndex % 7 + 1;
  }
});

for (let i = 32; i < 127; i++) {
  tm.print(String.fromCharCode(i));
}

function getInput () {
  tm.inputln('Ok ').then(str => tm.println(str.toUpperCase()) && getInput());
}

getInput();

