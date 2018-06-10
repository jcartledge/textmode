function eventsDemo (tm, backToMenu) {
  tm.cls();
  for (let i = 32; i < 127; i++) {
    tm.print(String.fromCharCode(i));
  }
  tm.println('Press any key');
tm.getKey().then(backToMenu);
}

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


export default eventsDemo;
