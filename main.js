const buttons = document.querySelectorAll("#buttons button");
const result = document.querySelector("#result");
const menu = document.querySelector("#menu");
const battleField = document.querySelector("#battle-field");
const playButton = document.querySelector("#play-button");
const backButton = document.querySelector("#back-button");

playButton.addEventListener("click", () => {
  battleField.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});

backButton.addEventListener("click", () => {
  battleField.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.dataset.value;
    play(playerChoice, getComputerChoice());
  });
});

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

function play(playerChoice, computerChoice) {
  const player = playerChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();
  console.log(`You: ${player} vs. Computer: ${computer}`);
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    result.innerText = "Player";
  } else if (
    (computer === "rock" && player === "scissors") ||
    (computer === "scissors" && player === "paper") ||
    (computer === "paper" && player === "rock")
  ) {
    result.innerText = "Computer";
  } else if (player === computer) {
    result.innerText = "Draw";
  }
}
