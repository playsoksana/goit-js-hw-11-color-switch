import './styles.css';
import colors from './bases/colors';
import randomIntegerFromInterval from './bases/randomIntegerFromInterval.js'

//   =============================
const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};

let intervalIdChangeColor = null;
let color = null;
addColorFromlocalStorage();
refs.startBtn.addEventListener('click', ev=> {
    ev.target.disabled = true;
   refs.stopBtn.disabled = false;
    intervalIdChangeColor = setInterval(() => {
        color = colors[randomIntegerFromInterval(0, colors.length-1)];
        setColortoLocalStorage(color);
        refs.body.style.backgroundColor = color;
       
    }, 1000);
})
refs.stopBtn.addEventListener('click', ev=>{    
    ev.target.disabled = true;
   refs.startBtn.disabled = false;
    clearInterval(intervalIdChangeColor);
})

function setColortoLocalStorage (color) {
localStorage.setItem('color', color);
};
function addColorFromlocalStorage(){
    if (localStorage.getItem('color')) {
        refs.body.style.backgroundColor = localStorage.getItem('color');
    }
}