function fontDemo (tm, backToMenu) {
  const selectMode = Symbol('selectMode');
  const editMode = Symbol('editMode');
  let mode = selectMode;

  const firstChar = 32;
  const lastChar = 127;
  let currentChar = firstChar;
  let startPos = 0;

  let editRow = 0;
  let editCol = 0;
  let charOriginRow = 0;
  let charOriginCol = 0;
  const saveCursor = tm.cursor;
  tm.cursor = 1;

  function drawFontDemo () {
    tm.cls().println();
    tm.center('*** Font ***').println();
    startPos = tm.pos;
    for (let i = firstChar; i < lastChar; i++) {
      tm.print(String.fromCharCode(i));
    }

    tm.println();
    charOriginRow = tm.loc.row;
    charOriginCol = tm.numCols / 2 - tm.font.width / 2;
    tm.font.chr(currentChar).forEach(row => {
      const rowString = row.toString(2).padStart(tm.font.width, 0).replace(/0/g, ' ').replace(/1/g, '*');
      tm.center(rowString);
    });

    switch (mode) {
      case selectMode:
        charSelectMode();
        break;
      case editMode:
        charEditMode();
        break;
    }
  }

  function charSelectMode () {
    tm.println().center('Arrows to select character,');
    tm.center('space to edit character,');
    tm.center('q to return to menu');

    tm.moveTo(currentChar - firstChar + startPos);
    tm.getKey().then(e => {
      switch (e.key) {
        case 'ArrowLeft':
          currentChar = Math.max(firstChar, currentChar - 1);
          break;
        case 'ArrowRight':
          currentChar = Math.min(lastChar, currentChar + 1);
          break;
        case ' ':
          mode = editMode;
          break;
        case 'q':
          tm.cursor = saveCursor;
          backToMenu();
          return;
      }
      drawFontDemo();
    });
  }

  function charEditMode () {
    tm.println().center('Arrows to select pixel,');
    tm.center('space to toggle,');
    tm.center('q to exit');

    tm.moveTo(charOriginRow + editRow, charOriginCol + editCol);
    tm.getKey().then(e => {
      switch (e.key) {
        case 'ArrowUp':
          editRow = Math.max(0, editRow - 1);
          break;
        case 'ArrowDown':
          editRow = Math.min(tm.font.height - 1, editRow + 1);
          break;
        case 'ArrowLeft':
          editCol = Math.max(0, editCol - 1);
          break;
        case 'ArrowRight':
          editCol = Math.min(tm.font.width - 1, editCol + 1);
          break;
        case ' ':
          tm.font.data[currentChar][editRow] ^= Math.pow(2, tm.font.width - 1 - editCol);
          break;
        case 'q':
          mode = selectMode;
      }
      drawFontDemo();
    });
  }
  drawFontDemo();
}

export default fontDemo;
