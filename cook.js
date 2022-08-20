// import {Dishes} from './createOrders.js';

// const TRAYS = document.$$('.order-tray');

const cook = (target) => {
    const station = document.$('#main-ui');
    if (!station.classList.contains('show')) {

        station.classList.add('show');
        //console.log(target);
        target.classList.add('active');

        for (let i = 0; i < 9; i++) {
            const recipe = station.$('.recipe');
            const recipeItem = document.createElement('li');
            recipeItem.classList.add('recipe-item');
            recipeItem.textContent = 'Okra!';
            recipe.appendChild(recipeItem);
        }
    }
}

// document.addEventListener('keypress', (evt) => console.log(evt.key));

export { cook };
