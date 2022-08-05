import {TRAYS} from './createOrders.js';

const CUSTOMERS = [
	{
		name: 'Wesker',
		img: "url('resource/humans/wesker.png')",
	}
];

const spawnCustomer = () => {

	const customersList = document.querySelectorAll('.customer-spawn');
	
	if (customersList.length < 6) {
		const customer = document.createElement('div');
		customer.classList.add('customer-spawn', 'customer');
		customer.style.backgroundImage = CUSTOMERS[0].img;
		const base = document.getElementById('client-base').querySelector('[data-status="empty"]');
		base.dataset.status = "occupied";
		
		// if (base.children.length < TRAYS.length) {
		setTimeout(() => base.appendChild(customer), 1000);
		// }
	}
};

export {spawnCustomer};
