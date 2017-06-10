export default function createGameElement(data) {
  const el = document.createElement('div');
  el.classList.add('grid__item');
  el.innerHTML = `
  <div class = "game-item">
    <img src="http://fillmurray.com/300/400" alt="" class="game-item__pic">
    <h3 class="game-item__name">Game title goes here</h3>
    <h4 class="game-item__popularity">Number of viewers goes here</h4>
  </div>`;

  el.querySelector('.game-item__name').innerText = data.game.name;
  el.querySelector('.game-item__popularity').innerText = `${data.game.popularity} Viewers`;
  el.querySelector('.game-item__pic').src = data.game.box.large;
  el.querySelector('.game-item__pic').alt = data.game.name;

  return el;
}
