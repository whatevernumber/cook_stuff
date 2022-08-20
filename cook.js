// import {Dishes} from './createOrders.js';

const TRAYS = document.$$('.order-tray');

const cook = (target) => {
    const station = document.$('#main-ui');
    if (!station.classList.contains('show')) {

        const index = Array.from(TRAYS).indexOf(target);
        station.classList.add('show');
        target.classList.add('active');

        for (let i = 0; i < TRAYS.recipe[index].length; i++) {
            const recipe = station.$('.recipe');
            const recipeItem = document.createElement('li');
            recipeItem.classList.add('recipe-item');
            recipeItem.textContent = TRAYS.recipe[index][i];
            recipe.appendChild(recipeItem);
        }
    }
}

// document.addEventListener('keypress', (evt) => console.log(evt.key));

export { cook };
