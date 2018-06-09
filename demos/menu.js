const menuItems = [
  '1. Events',
  '2. Colour cycling',
  '3. Fonts',
  '4. Input'
];

let selectedMenuItem = 0;

function printMenu (tm) {
  tm.moveTo(0, 0);
  tm.println();
  tm.center('*** TEXTMODE ***');
  tm.println();
  menuItems.map((item, i) => {
    if (i === selectedMenuItem) {
      tm.inv().center(item).inv();
    } else {
      tm.center(item);
    }
  });
  tm.getKey().then(e => {
    switch (e.key) {
      case 'ArrowUp':
        selectedMenuItem = Math.max(0, selectedMenuItem - 1);
        break;
      case 'ArrowDown':
        selectedMenuItem = Math.min(menuItems.length - 1, selectedMenuItem + 1);
    }
    printMenu(tm);
  });
}

function menu(tm) {
  tm.cls();
  printMenu(tm);
}

export default menu;
