/* Imports */

/* Get DOM Elements */
const hobbitImg = document.getElementById('hobbit-img');
const mountianImg = document.getElementById('mountian-img');
const treesImg = document.getElementById('trees-img');

const hobbitButton = document.getElementById('hobbit-button');
const mountianButton = document.getElementById('mountian-button');
const treesButton = document.getElementById('trees-button');

const correctSpan = document.getElementById('correct-span');
const incorrectSpan = document.getElementById('incorrect-span');
const totalSpan = document.getElementById('total-span');

/* State */
let correctGuesses = 0;
let totalGuesses = 0;
/* Events */
hobbitButton.addEventListener('click', () => {
    console.log('hobbit');
});

mountianButton.addEventListener('click', () => {
    console.log('mountian');
});

treesButton.addEventListener('click', () => {
    console.log('trees');
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
