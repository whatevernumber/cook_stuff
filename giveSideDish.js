import { HOTSTATIONS } from "./createSideDish.js";
import { randomize } from "./math.js";

const giveDish = () => {
  try {
    let availableDishes = Array.from(
      HOTSTATIONS.querySelectorAll('[data-status = "occupied"]')
    );

    let dish = availableDishes[randomize(0, availableDishes.length - 1, 0)];
    let dishIndex = dish.querySelector(".hs-counter");
    let portions = Number(dishIndex.textContent);
    if (portions > 1) {
      dishIndex.textContent = portions - 1;
    } else {
      dish.dataset.status = "empty";
      dish.removeChild(dish.querySelector(".hs-dish"));
    }
  } catch {
    console.log("Нет доступных блюд!");
  }
};

export { giveDish };
