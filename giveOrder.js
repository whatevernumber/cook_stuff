import { callOrders } from './createOrders.js';
import { giveDish } from './giveSideDish.js';
// import {cook} from './cook.js';
import {TRAY_COUNT} from './main.js';

const orderTrays = Array.from(document.$$('.order-tray'));

const completeEvent = new CustomEvent('give', {
    detail: {datasetStatus: 'complete'}
});

const despawnCustomer = (index) => {
    try {
        const customers = document.$$('.customer-column');
        const currentCustomer = customers[index].$('.customer-spawn');

        currentCustomer.classList.remove('customer-spawn');
        currentCustomer.classList.add('customer-leave');
        customers[index].dataset.status = "empty";
        setTimeout(() => currentCustomer.remove(), 500);
    } catch {
        console.log('Stop clicking like a moron!');
    }
};

document.addEventListener('keypress', (evt) => {
    if (evt.key > 0 && evt.key < TRAY_COUNT) {
        const index = evt.key;
        const tray = orderTrays[index - 1];
        if (tray.dataset.status !== 'empty') {
            try {
                giveDish();
                tray.removeChild(tray.$('.dish'));
                tray.dataset.status = 'complete';
                tray.dispatchEvent(completeEvent);
                despawnCustomer(index - 1);
                callOrders(tray);
            } catch {
                console.log('!');
            }
        }
    }
})

orderTrays.forEach((tray) => {
    tray.addEventListener('give', () => {
        // console.log('You can set an action triggering on this event!');
    })
});

// orderTrays.forEach((tray) => {
//         tray.addEventListener('keypress', (evt) => {
//             if (tray.dataset.status !== 'empty') {
//                 try {
//                     const index = evt.key;
//                     console.log(index);
//                     despawnCustomer(index);
//                     giveDish();
//                     tray.removeChild(tray.$('.dish'));
//                     tray.dataset.status = 'complete';
//                     tray.dispatchEvent(completeEvent);
//                     // cook(index);
//                     callOrders(tray);
//                 } catch {
//                     // console.log('Tray empty!');
//                 }
//             }
//         });
// }); // click trays for testing purposes
