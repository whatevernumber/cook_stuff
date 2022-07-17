const orderTrays = document.getElementsByClassName('order-tray');
const trays = document.getElementsByClassName('tray');
const IDLE = 'idle';
const SELECTED = 'selected';

for (let i = 0; i < orderTrays.length; i++) {
    orderTrays[i].onmouseover = () => {
        trays[i].classList.remove(IDLE);
        trays[i].classList.add(SELECTED);
    }
    orderTrays[i].onmouseout = () => {
        trays[i].classList.remove(SELECTED);
        trays[i].classList.add(IDLE);
    }
    orderTrays[i].onclick = () => {
        trays[i].classList.add(SELECTED);
    }
}
