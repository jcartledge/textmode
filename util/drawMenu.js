let selectedMenuItem = 0;

function drawMenu (tm, menuItems, backToMenu) {
  const longestItemLabel = menuItems.reduce((acc, [item]) => Math.max(acc, item.length), 0);
  menuItems.map(([item], i) => {
    const label = item.padEnd(longestItemLabel);
    if (i === selectedMenuItem) {
      tm.inv().center(`> ${label}  `).inv();
    } else {
      tm.center(`  ${label}  `);
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
      case ' ':
        menuItems[selectedMenuItem][1](tm, backToMenu);
        return;
    }
    backToMenu();
  });
}

export default drawMenu;
