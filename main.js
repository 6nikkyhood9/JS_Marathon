'use strict'

const container = document.querySelector('.container');
const SQUARE_NUMBER = 499;

for (let i = 0; i < SQUARE_NUMBER; i++) {
    let square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);

    container.append(square);
}

function setColor(event) {
    let element = event.target;
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    let element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}