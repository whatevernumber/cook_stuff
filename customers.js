const CUSTOMERS = [
	{
		name: 'Wesker',
		img: "url('resource/humans/wesker.png')",
	}
];

const spawnCustomer = () => {
	const customer = document.createElement('div');
	customer.classList.add('customer-spawn', 'customer');
	customer.style.backgroundImage = CUSTOMERS[0].img;
	document.getElementById('client-base').appendChild(customer);
};

export {spawnCustomer};
