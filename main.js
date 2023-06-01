const choiceButtons = document.querySelectorAll("#choice-buttons button");
const result = document.querySelector("#result");
const menuScreen = document.querySelector("#menu");
const roundCountButtons = document.querySelectorAll("#round-count-btns button");
const battleFieldScreen = document.querySelector("#battle-field");
const gameOverScreen = document.querySelector("#game-over");
const playButton = document.querySelector("#play-button");
const backButton = document.querySelector("#back-button");
const gameOverBackButton = document.querySelector("#go-bb");
const gameOverPlayerScore = document.querySelector("#go-ps");
const gameOverComputerScore = document.querySelector("#go-cs");

let roundCounter = 0;
let counter = 0;
let playerScore = 0;
let computerScore = 0;

// EVENT LISTENERS
roundCountButtons.forEach((btn) => {
  // GETTING THE NUMBER OF ROUNDS THE USER WANTS TO PLAY
  btn.addEventListener("click", () => {
    roundCounter = btn.dataset.count;
  });
});

playButton.addEventListener("click", () => {
  if (roundCounter > "0") {
    menuScreen.classList.toggle("hidden");
    battleFieldScreen.classList.toggle("hidden");
  } else {
    alert("Please Choose a Number");
  }
});

backButton.addEventListener("click", () => {
  battleFieldScreen.classList.toggle("hidden");
  menuScreen.classList.toggle("hidden");
  counter = 0;
  playerScore = 0;
  computerScore = 0;
  roundCounter = 0;
});

gameOverBackButton.addEventListener("click", () => {
  gameOverScreen.classList.toggle("hidden");
  menuScreen.classList.toggle("hidden");
  counter = 0;
  playerScore = 0;
  computerScore = 0;
  roundCounter = 0;
});

choiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.dataset.value;
    play(playerChoice, getComputerChoice(), roundCounter);
  });
});

// GAME FUNCTIONALITIES

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
// PLAY

function play(playerChoice, computerChoice, roundCount) {
  const player = playerChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();
  console.log(`You: ${player} vs. Computer: ${computer}`);
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    result.innerText = "Player";
    playerScore++;
    counter++;
    if (counter === +roundCount) {
      gameOver(playerScore, computerScore);
    }
  } else if (
    (computer === "rock" && player === "scissors") ||
    (computer === "scissors" && player === "paper") ||
    (computer === "paper" && player === "rock")
  ) {
    result.innerText = "Computer";
    computerScore++;
    counter++;
    if (counter === +roundCount) {
      gameOver(playerScore, computerScore);
    }
  } else if (player === computer) {
    result.innerText = "Draw";
    counter++;
    if (counter === +roundCount) {
      gameOver(playerScore, computerScore);
    }
  }
}

// GAME OVER
function gameOver(playerScoreArgs, computerScoreArgs) {
  gameOverPlayerScore.innerText = playerScoreArgs;
  gameOverComputerScore.innerText = computerScoreArgs;
  battleFieldScreen.classList.toggle("hidden");
  gameOverScreen.classList.toggle("hidden");
  counter = 0;
  playerScore = 0;
  computerScore = 0;
  roundCounter = 0;
}
