// This file contains the main logic for the typing game. It initializes the game, handles user input, calculates accuracy, and updates the displayed text and score.

let words = ["apple", "banana", "cherry", "date", "elderberry"];
let currentWordIndex = 0;
let score = 0;
let startTime;
let timer;

const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const scoreDisplay = document.getElementById("score-display");
const timerDisplay = document.getElementById("timer-display");

function startGame() {
    currentWordIndex = 0;
    score = 0;
    inputField.value = "";
    scoreDisplay.textContent = `Score: ${score}`;
    displayNextWord();
    startTime = new Date();
    timer = setInterval(updateTimer, 1000);
}

function displayNextWord() {
    if (currentWordIndex < words.length) {
        wordDisplay.textContent = words[currentWordIndex];
    } else {
        endGame();
    }
}

function updateTimer() {
    const elapsedTime = Math.floor((new Date() - startTime) / 1000);
    timerDisplay.textContent = `Time: ${elapsedTime}s`;
}

function checkInput() {
    const userInput = inputField.value;
    if (userInput === words[currentWordIndex]) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        currentWordIndex++;
        inputField.value = "";
        displayNextWord();
    }
}

function endGame() {
    clearInterval(timer);
    alert(`Game over! Your score is ${score}.`);
}

inputField.addEventListener("input", checkInput);
window.addEventListener("load", startGame);