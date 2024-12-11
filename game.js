function generateComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3); // Generate a random number from 1-3

  return computerChoice[randomNumber];
}

function getPlayerChoice() {
  let validOptions = ["rock", "paper", "scissors"];
  let playerChoice;

  do {
    playerChoice = prompt("Enter a choice from rock, paper, or scissors.");

    if (playerChoice === null) {
      console.log("Thanks for playing.");
      break;
    } else if (playerChoice === "") {
      console.log("Input can't be empty. Enter a choice from rock, paper, or scissors.");
      continue;
    }

    playerChoice = playerChoice.trim().toLowerCase();

    if (!validOptions.includes(playerChoice)) {
      console.log("Invalid input. Enter a choice from rock, paper, or scissors.");
    }
  } while (!validOptions.includes(playerChoice));

  return playerChoice;
}