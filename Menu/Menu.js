const bySelector = (selector, cb = false) => {
  const element = document.querySelector(selector);
  return cb ? cb(element) : element;
};

const addListener = (eventName, cb) => element => {
  element.addEventListener(eventName, cb);
};

const toggleMenu = ({ classList }, className) => () => {
  // Toggle the "menu--open" class on your menu refence.
  classList.toggle(className);
};

// Start Here: Create a reference to the ".menu" class
const menu = bySelector('.menu');
// create a reference to the ".menu-button" class
bySelector(
  '.menu-button',
  addListener('click', toggleMenu(menu, 'menu--open'))
);
// Using your menuButton reference, add a click handler that calls toggleMenu
