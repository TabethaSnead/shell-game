/* Imports */

/* Get DOM Elements */
const hobbitContainer = document.getElementById('hobbit-container');
const mountainContainer = document.getElementById('mountain-container');
const treesContainer = document.getElementById('trees-container');

const hobbitButton = document.getElementById('hobbit-button');
const mountainButton = document.getElementById('mountain-button');
const treesButton = document.getElementById('trees-button');

const correctSpan = document.getElementById('correct-span');
const incorrectSpan = document.getElementById('incorrect-span');
const totalSpan = document.getElementById('total-span');

/* State */
let correctGuesses = 0;
let totalGuesses = 0;
/* Events */
hobbitButton.addEventListener('click', () => {
    handleGuess('hobbit');
    console.log('hobbitButton');
});

mountainButton.addEventListener('click', () => {
    handleGuess('mountain');
    console.log('mountainButton');
});

treesButton.addEventListener('click', () => {
    handleGuess('trees');
    console.log('treesButton');
});

/* Display Functions */
function getRandomHidingSpot() {
    const hidingPlaces = ['hobbit', 'mountain', 'trees'];
    const index = Math.floor(Math.random() * hidingPlaces.length);
    return hidingPlaces[index];
}

function handleGuess(userGuess) {
    const correctSpot = getRandomHidingSpot();
    hobbitContainer.classList.remove('face');
    mountainContainer.classList.remove('face');
    treesContainer.classList.remove('face');

    totalGuesses++;

    const correctHidingSpot = document.getElementById(`${correctSpot}-container`);

    correctHidingSpot.classList.add('face');

    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    correctSpan.textContent = correctGuesses;
    totalSpan.textContent = totalGuesses;
    incorrectSpan.textContent = totalGuesses - correctGuesses;
}
// (don't forget to call any display functions you want to run on page load!)
