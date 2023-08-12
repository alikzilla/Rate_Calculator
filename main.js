const input = document.querySelector('.input');
const output = document.querySelector('.output');
const btn = document.querySelector('#btn');
const rate = document.querySelector('#country');

const map = new Map();
map.set('USA' , 447.9);
map.set('England' , 568.5);
map.set('Russia' , 4.5);
map.set('Turkey' , 16.5);
map.set('Uzbekistan' , 0.03);

input.addEventListener("input", sumRate);

// Event listener function
function sumRate() {
    let rateValue = input.value * map.get(rate.value);
    output.value = Number(rateValue.toFixed(1));
}