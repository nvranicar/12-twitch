import 'whatwg-fetch';
import data from './data';

import createGameElement from './twitch/create-game-element.js';

const grid = document.querySelector('.grid');

grid.innerHTML = '';

data.top.forEach((game) => {
  const gameElement = createGameElement(game);

  grid.appendChild(gameElement);
});
