const DrawerInitiator = {
  init({
    button, drawer, content, close,
  }) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    close.addEventListener('click', (event) => {
      event.preventDefault();
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.style.display = 'flex';
    drawer.style.top = '0';
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.style.top = '-100%';
  },
};

export default DrawerInitiator;
