let selectedMenuItem = 0;

function drawMenu (tm, menuItems, backToMenu) {
  menuItems.map(([item], i) => {
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
        break;
      case 'Enter':
        menuItems[selectedMenuItem][1](tm, backToMenu);
        return;
    }
    backToMenu();
  });
}

export default drawMenu;
