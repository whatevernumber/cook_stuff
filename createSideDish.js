const HOTSTATIONS = document.$('#hot-stations');

const sideDishes = [
    {
        name: "Soup",
        origin: "Russia",
        image: 'url("resource/side-dish/soup.png")',
        quantity: 9,
    },
];

const addSideDish = (evt) => {
    if (evt.target.nodeName === "LI") {
        const side = document.$("#hs-template").content.cloneNode(true);
        side.$("div.hs-dish").style.backgroundImage = sideDishes[0].image;
        side.$('.hs-counter').textContent = sideDishes[0].quantity;

        if (evt.target.dataset.status === "empty") {
            try {
                evt.target.appendChild(side);
                evt.target.dataset.status = "occupied";
            } catch {
                console.log('All hot stations are occupied!');
            }
        }
    }
};

HOTSTATIONS.addEventListener('click', addSideDish);

export { HOTSTATIONS };