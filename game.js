let computerScore = 0;
let playerScore = 0;

playRound(1);

function playRound(round) {
  let playerChoice = getPlayerChoice();
  let computerChoice = generateComputerChoice();

  // Exit if player choice is null
  if (!playerChoice) { return; }

  console.log(`Round: ${round}\n` + `Player choice: ${playerChoice}\n` + `Computer choice: ${computerChoice}`);

  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    console.log("You win this round!");
  } else {
    computerScore++;
    console.log("Computer wins this round!");
  }

  console.log(`Your score so far is: ${playerScore}\n` + `Computer score so far is: ${computerScore}`);
}

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