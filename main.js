'use strict';

const getRandomInt = max => Math.floor(Math.random() * max);

function cardPlugin(num = 0) {
    const cards = document.querySelectorAll('.card');

    const removeActive = () => cards.forEach(card => card.classList.remove('active'));

    cards[num].classList.add('active');

    for (const card of cards) {
        card.addEventListener('click', () => {
            removeActive();
            card.classList.add('active');
        });
    }
}
cardPlugin(getRandomInt(5))