import {callOrders} from './createOrders.js';
import {randomize} from "./math.js";

const orderTrays = document.querySelectorAll('.order-tray');

setTimeout(() => {
    orderTrays.forEach((tray) => {
        tray.addEventListener('click', () => {

        if (tray.dataset.status != 'empty') {
            try {
                tray.removeChild(tray.querySelector('.dish'));
                tray.dataset.status = 'empty';
                callOrders(tray);
            }
            catch {console.log('Tray empty!');}
        }
    });
});
}, 1500);
