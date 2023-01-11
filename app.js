/* Imports */

/* Get DOM Elements */
const hobbitContainer = document.getElementById('hobbit-container');
const mountianContainer = document.getElementById('mountian-container');
const treesContainer = document.getElementById('trees-container');

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
    handleGuess('hobbit', getRandomHidingSpot());
});

mountianButton.addEventListener('click', () => {
    handleGuess('mountian', getRandomHidingSpot());
});

treesButton.addEventListener('click', () => {
    handleGuess('trees', getRandomHidingSpot());
});

/* Display Functions */
function getRandomHidingSpot() {
    const hidingPlaces = ['hobbit', 'mountian', 'trees'];
    const index = Math.floor(Math.random() * hidingPlaces.length);
    return hidingPlaces[index];
}

function handleGuess(userGuess, correctSpot) {
    hobbitContainer.classList.remove('face');
    mountianContainer.classList.remove('face');
    treesContainer.classList.remove('face');

    const correctHidingSpot = document.getElementById(`${correctSpot}-container`);

    correctHidingSpot.classList.add('face');

    if (userGuess === correctSpot) {
        correctGuesses++;
    }
    totalGuesses++;

    correctSpan.textContent = correctGuesses;
    totalSpan.textContent = totalGuesses;
    incorrectSpan.textContent = totalGuesses - correctGuesses;
}
// (don't forget to call any display functions you want to run on page load!)
