import {randomize} from './math.js';
import {spawnCustomer} from './customers.js';

const TRAY_COUNT = 6;
const Dishes = [
    {
        name: 'Okra',
        origin: 'Japan',
        image: 'url("resource/main-dish/okra.png")',
    },
    {
        name: 'Okra',
        origin: 'Japan',
        image: 'url("resource/main-dish/okra.png")',
    },
    {
        name: 'Okra',
        origin: 'Japan',
        image: 'url("resource/main-dish/okra.png")',
    },
];

const TRAYS = document.getElementsByClassName('order-tray');

    /* Audio (not working) */

const orderBell = new Audio('./resource/audio/bell.mp3');
const playAudio = () => orderBell.play();

    /* Setting all trays available for orders to appear */

const emptyTrays = (trays) => {
    for (let tray of trays) {
        tray.dataset.status = empty;
    }
};

document.onload = () => {emptyTrays(TRAYS)};

    /* Calling orders when trays are empty & disabling them for acquiring more than 1 order at a time */

let busyStatus = 'free';

const createOrder = (TRAYS, dishes) => {
    const ORDER = document.querySelector('#order-template').content.cloneNode(true);
    ORDER.querySelector('div.dish').style.backgroundImage = dishes.image;

    const emptyTrays = [];
    Array.from(TRAYS).forEach((tray) => {
        if (tray.dataset.status === 'empty') {
            emptyTrays.push(tray);
        }
    });

    try {
        emptyTrays[0].appendChild(ORDER);
        emptyTrays[0].dataset.status = 'occupied';
		spawnCustomer();
    } catch(err) {
        console.log('All trays are occupied!');
        return busyStatus = 'busy';
    }
};

const callOrders = (tray) => {

    if (tray) {
        if (tray.dataset.status === 'empty') {
        busyStatus = 'free';
    }
}
    

    if (busyStatus === 'free') {
    setTimeout(() => {
        createOrder(TRAYS, Dishes[randomize(0, Dishes.length - 1, 0)]);
        },
        randomize(100, 200, 0));
}};

setInterval(callOrders, randomize(100, 200, 0));

export {callOrders};