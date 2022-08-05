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
	const base = document.getElementById('client-base');

	// if (base.children.length < TRAYS.length) {
		base.appendChild(customer);
	// }
};

export {spawnCustomer};
