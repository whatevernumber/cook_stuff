const TRAY_COUNT = 6;

const CUSTOMERS = [
	{
		name: `wesker`,
		img: `url('resource/humans/wesker.png')`,
	}
];

const spawnCustomer = () => {
	const customer = document.createElement('div');
	customer.classList.add('customer-spawn', 'customer');
	customer.style.backgroundImage = CUSTOMERS[0].img;

	const customersList = document.querySelectorAll('.customer-spawn');
	
	if (customersList.length < TRAY_COUNT) {
		const customer = document.createElement('div');
		customer.classList.add('customer-spawn', 'customer');
		customer.style.backgroundImage = CUSTOMERS[0].img;
		const base = document.$('#client-base').querySelector('[data-status="empty"]');
		base.dataset.status = "occupied";
		
		// if (base.children.length < TRAYS.length) {
		setTimeout(() => base.appendChild(customer), 1000);
		// }
	}
}

export {spawnCustomer}