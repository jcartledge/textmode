import drawMenu from '../util/drawMenu.js';

function checkBox (state) {
  return `[${state ? 'x' : ' '}]`;
}

function eventsDemo (tm, backToMenu) {
  function eventState (event) {
    return tm.events[event];
  }
  function toggleEvent (event) {
    tm.events[event] = !tm.events[event];
  }
  const menuItems = Object.keys(tm.events).map(event => {
    return [
      `${checkBox(eventState(event))} ${event}`,
      (tm, back) => { toggleEvent(event); back(); }
    ];
  });
  menuItems.push(['<- Back to menu', backToMenu]);
  tm.cls().println();
  tm.center('*** Events ***').println();
  tm.println();
  drawMenu(tm, menuItems, _ => eventsDemo(tm, backToMenu));
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
