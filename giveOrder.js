import { callOrders } from './createOrders.js';
import { giveDish } from './giveSideDish.js';

const orderTrays = Array.from(document.$('.order-tray'));

const completeEvent = new CustomEvent('give', {
    detail: {datasetStatus: 'complete'}
});

const despawnCustomer = (index) => {
    try {
        const customers = document.querySelectorAll('.customer-column');
        const currentCustomer = customers[index].$('.customer-spawn');

        currentCustomer.classList.remove('customer-spawn');
        currentCustomer.classList.add('customer-leave');
        customers[index].dataset.status = "empty";
        setTimeout(() => currentCustomer.remove(), 500);
    } catch {
        console.log('Stop clicking like a moron!');
    }
};

orderTrays.forEach((tray) => {
        tray.addEventListener('click', (evt) => {
            if (tray.dataset.status !== 'empty') {
                try {
                    const index = orderTrays.indexOf(evt.target);
                    despawnCustomer(index);
                    giveDish();
                    tray.removeChild(tray.$('.dish'));
                    tray.dataset.status = 'complete';
                    tray.dispatchEvent(completeEvent);
                    callOrders(tray);
                } catch {
                    console.log('Tray empty!');
                }
            }
        });

    tray.addEventListener('give', () => {
        console.log('You can set an action triggering on this event!');
    })
});

