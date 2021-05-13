import './styles.css';
import colors from './bases/colors';
import randomIntegerFromInterval from './bases/randomIntegerFromInterval.js'

//   =============================
const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};

downloadsColorInLocalStorage();
refs.startBtn.addEventListener('click', stasts);

let intervalIdChangeColor = null;
let indexColor = null;


function stasts() {
    refs.startBtn.removeEventListener('click', stasts);
    refs.stopBtn.addEventListener('click', stopChangeColor);
    intervalIdChangeColor = setInterval(colorChange, 1000);
};

function stopChangeColor() {
    refs.stopBtn.removeEventListener('click', stopChangeColor);
    refs.startBtn.addEventListener('click', stasts);
    clearInterval(intervalIdChangeColor);
    addColorInLocalStorage();
};

function colorChange() {
    indexColor = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[indexColor];
};


//localStorage

function addColorInLocalStorage() {
     localStorage.setItem('color', colors[indexColor]);
};

function downloadsColorInLocalStorage() {
if (localStorage.getItem('color')){
    refs.body.style.backgroundColor = localStorage.getItem('color');
}
};