import { HOTSTATIONS } from "./createSideDish.js";

const giveDish = () => {
  try {
    let availableDish = HOTSTATIONS.querySelector('[data-status = "occupied"]');
    let dishIndex = availableDish.querySelector(".hs-counter");
    let portions = Number(dishIndex.textContent);

    if (portions > 1) {
      dishIndex.textContent = portions - 1;
    } else {
      availableDish.dataset.status = "empty";
      availableDish.removeChild(availableDish.querySelector('.hs-dish'));
    }
  }  catch {
    console.log("Нет доступных блюд!");
  }
};

export { giveDish };
