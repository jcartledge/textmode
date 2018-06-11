const palette = Uint32Array.from([//{
  //AARRGGBB
  0xFF000000,

  0xFFFFFFFF,
  0xFFCCCCCC,
  0xFF999999,
  0xFF666666,
  0xFF333333,

  0xFF0000FF,
  0xFF0000CC,
  0xFF000099,
  0xFF000066,
  0xFF000033,

  0xFF00FF00,
  0xFF00CC00,
  0xFF009900,
  0xFF006600,
  0xFF003300,

  0xFFFF0000,
  0xFFCC0000,
  0xFF990000,
  0xFF660000,
  0xFF330000,

  0xFFFF00FF,
  0xFFCC00CC,
  0xFF990099,
  0xFF660066,
  0xFF330033,

  0xFF0000FF,
  0xFF0000CC,
  0xFF000099,
  0xFF000066,
  0xFF000033,

  0xFFFFFF00,
  0xFFCCCC00,
  0xFF999900,
  0xFF666600,
  0xFF333300
]);//}

function colourCyclingDemo (tm, backToMenu) {
  function cycle () {
    const [bg, ...fg] = tm.palette;
    fg.push(fg.shift());
    tm.palette = [bg, ...fg];
  }
  const saveBeforeRenderState = tm.events.BeforeRender;
  tm.events.BeforeRender = true;
  tm.canvas.addEventListener('textModeBeforeRender', cycle);

  const savePalette = tm.palette;
  tm.palette = palette;
  tm.cls().println();
  tm.center('*** Colour Cycling ***');

  for (let i = 32; i < 127; i++) {
    const fg = i % (palette.length - 1) + 1;
    tm.fg = fg;
    tm.print(String.fromCharCode(i));
  }
  tm.fg = 1;
  tm.println().println('Press any key');
  tm.getKey().then(_ => {
    tm.palette = savePalette;
    tm.canvas.removeEventListener('textModeBeforeRender', cycle);
    tm.events.BeforeRender = saveBeforeRenderState;
    backToMenu();
  });
}

export default colourCyclingDemo;

