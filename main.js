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

const playerBoard = document.querySelector("#player-board");
const playerBoardImg = document.querySelector("#player-choice");
const computerBoard = document.querySelector("#computer-board");
const computerBoardImg = document.querySelector("#computer-choice");

let roundCounter = 0;
let counter = 0;
let playerScore = 0;
let computerScore = 0;

// INITIALIZE
playerBoardImg.classList.add("hidden");
computerBoardImg.classList.add("hidden");

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
  playerBoardImg.classList.add("hidden");
  computerBoardImg.classList.add("hidden");
  counter = 0;
  playerScore = 0;
  computerScore = 0;
  roundCounter = 0;
});

gameOverBackButton.addEventListener("click", () => {
  gameOverScreen.classList.toggle("hidden");
  menuScreen.classList.toggle("hidden");
  playerBoardImg.classList.add("hidden");
  computerBoardImg.classList.add("hidden");
  counter = 0;
  playerScore = 0;
  computerScore = 0;
  roundCounter = 0;
});

choiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.dataset.value;
    playerBoardImg.dataset.hand = `${btn.dataset.value}`;
    play(playerChoice, getComputerChoice(), roundCounter);
    if (playerBoardImg.dataset.hand === "rock") {
      playerBoardImg.src = "./images/rock.png";
    } else if (playerBoardImg.dataset.hand === "paper") {
      playerBoardImg.src = "./images/paper.png";
    } else {
      playerBoardImg.src = "./images/scissors.png";
    }
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
  // computer hand rendering conditionals
  computerBoardImg.dataset.hand = `${computer}`;
  if (computerBoardImg.dataset.hand === "rock") {
    computerBoardImg.src = "./images/rock.png";
  } else if (computerBoardImg.dataset.hand === "paper") {
    computerBoardImg.src = "./images/paper.png";
  } else {
    computerBoardImg.src = "./images/scissors.png";
  }

  // 'Who wins' conditionals
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
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
    computerScore++;
    counter++;
    if (counter === +roundCount) {
      gameOver(playerScore, computerScore);
    }
  } else if (player === computer) {
    counter++;
    if (counter === +roundCount) {
      gameOver(playerScore, computerScore);
    }
  }
  // test
  console.log(`Player: ${playerScore} || Computer: ${computerScore}`);
  // toggle image for both player
  playerBoardImg.classList.remove("hidden");
  computerBoardImg.classList.remove("hidden");
}

// GAME OVER
function gameOver(playerScoreArgs, computerScoreArgs) {
  choiceButtons.forEach((btn) => {
    btn.setAttribute("disabled", true);
  });
  backButton.setAttribute("disabled", true);
  setTimeout(() => {
    gameOverPlayerScore.innerText = playerScoreArgs;
    gameOverComputerScore.innerText = computerScoreArgs;
    battleFieldScreen.classList.toggle("hidden");
    gameOverScreen.classList.toggle("hidden");
    counter = 0;
    playerScore = 0;
    computerScore = 0;
    roundCounter = 0;
    backButton.removeAttribute("disabled");
    choiceButtons.forEach((btn) => {
      btn.removeAttribute("disabled");
    });
  }, 1500);
}
