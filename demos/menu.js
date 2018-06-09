const menuItems = [
  '1. Events',
  '2. Colour cycling',
  '3. Fonts'
];

function menu(tm) {
  // let selectedMenuItem = 0;
  // function printMenu
  // printMenu();
  tm.cls();
  tm.println();
  tm.inv().center('*** TEXTMODE ***').inv();
  tm.println();
  menuItems.map(item => tm.center(item));
}


export default menu;
