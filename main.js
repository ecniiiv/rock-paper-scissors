function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;
  console.log(choice);

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
    console.log("Winner: Player");
  } else if (
    (computer === "rock" && player === "scissors") ||
    (computer === "scissors" && player === "paper") ||
    (computer === "paper" && player === "rock")
  ) {
    console.log("Winner: Computer");
  } else if (player === computer) {
    console.log("Draw");
  } else {
    console.log("invalid choice");
  }
}

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    const playerChoice = prompt("Rock, Paper or Scissors? :");

    play(playerChoice, getComputerChoice());
  }
}
