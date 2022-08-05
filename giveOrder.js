import { callOrders } from './createOrders.js';
import { spawnCustomer } from './customers.js';
import { giveDish } from './giveSideDish.js';

const orderTrays = Array.from(document.$('.order-tray'));

const completeEvent = new CustomEvent('give', {
    detail: {datasetStatus: 'complete'}
});

const despawnCustomer = (index) => {
    const customers = document.querySelectorAll('.customer');
    customers[index].classList.add('customer-leave');
    setTimeout(() => customers[index].remove(), 1000);
}

orderTrays.forEach((tray) => {
        tray.addEventListener('click', (evt) => {
            if (tray.dataset.status !== 'empty') {
                try {
                    const index = orderTrays.indexOf(evt.target);
                    despawnCustomer(index);
                    tray.removeChild(tray.$('.dish'));
                    tray.dataset.status = 'complete';
                    tray.dispatchEvent(completeEvent);
                    callOrders(tray);
                }
                catch {console.log('Tray empty!');}
            }
        });

        tray.addEventListener('give', () => {
            console.log('You can set an action triggering on this event!');
        })
    });

