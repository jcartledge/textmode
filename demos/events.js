import drawMenu from '../util/drawMenu.js';

const eventHandlers = {
  'BeforeRender': e => {
    const {args} = e.detail;
    args.textBuffer = args.textBuffer.reverse();
  },
  'BeforeRenderChar': e => {
    const {args} = e.detail;
    if (Math.random() < 0.01) {
      args.asciiCode = Math.floor(Math.random() * (127 - 34)) + 33;
    }
  },
  'BeforeRenderCharRow': e => {
    const {args} = e.detail;
    if (args.asciiCode) {
      args.fg = ((new Date()).getMilliseconds() + args.charRowIndex) % 7 + 1;
      counter = ++counter % 7;
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
  drawMenu(tm, menuItems, _ => eventsDemo(tm, backToMenu));
}

export default eventsDemo;
