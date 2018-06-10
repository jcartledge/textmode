import drawMenu from '../util/drawMenu.js';

const eventHandlers = {
  'BeforeRenderChar': e => {
    const {args} = e.detail;
    if (args.asciiCode) {
      args.bg = args.asciiCode % 8;
    }
  },
  'BeforeRenderCharRow': e => {
    const {args} = e.detail;
    if (args.asciiCode) {
      args.fg = args.charRowIndex % 7 + 1;
    }
  }
};

function checkBox (state) {
  return `[${state ? 'x' : ' '}]`;
}

function eventsDemo (tm, backToMenu) {
  function eventState (event) {
    return tm.events[event];
  }

  function toggleEvent (event) {
    tm.events[event] = !tm.events[event];
    if (eventHandlers[event]) {
      const eventName = `textMode${event}`;
      const method = `${tm.events[event] ? 'add' : 'remove'}EventListener`;
      tm.canvas[method](eventName, eventHandlers[event]);
    }
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

export default eventsDemo;
