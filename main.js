'use strict'

const screens = document.querySelectorAll('.screen');
const startBtn = document.querySelector('#start');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let score = 0;

const setTime = value => timeEl.innerHTML = `00:${value}`;
const getRandomSize = (min, max) => Math.round(Math.random() * (max - min) + min);


startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});

function startGame() {
    setInterval(timer, 1000);
    createRandomCircle();
    setTime(time);
}

function timer() {
    if (time === 0) {
        finishGame();
    } else {
        let currentTime = --time;

        if (currentTime < 10) {
            currentTime = `0${currentTime}`;
        }
        setTime(currentTime);
    }
}


function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML =
        `<h1>Your score: <span class='primary'>${score}</span></h1>`;

}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomSize(10, 70);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomSize(0, width - size);
    const y = getRandomSize(0, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${x}px`;
    circle.style.left = `${y}px`;
    circle.style.background = getRandomColor();

    board.append(circle);
}

function getRandomColor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}