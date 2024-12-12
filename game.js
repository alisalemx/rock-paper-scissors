let computerScore = 0;
let playerScore = 0;

playGame(5);

function playGame(rounds) {
  for (let i = 1; i <= rounds; i++) {
    const round = playRound(i);

    // Exit if round isn't played when player exits
    if (round === null) {
      console.log("Player left the game and there's no winner.");
      return;
    }
  }

  if (playerScore === computerScore) {
    console.log("🟡🟡🟡 THE GAME IS TIED! 🟡🟡🟡");
  } else if (playerScore > computerScore) {
    console.log("🧑🏻🧑🏻🧑🏻 PLAYER WINS THE GAME! 🧑🏻🧑🏻🧑🏻");
  } else {
    console.log("👾👾👾 COMPUTER WINS THE GAME! 👾👾👾");
  }

  console.log(`FINAL SCORE:\n` + `🧑🏻 Player: ${playerScore}\n` + `👾 Computer: ${computerScore}`);
}

function playRound(round) {
  const playerChoice = getPlayerChoice();
  const computerChoice = generateComputerChoice();

  // Exit and return null if there's no player choice
  if (!playerChoice) { return null; }

  console.log(`ROUND: ${round}\n` + `🧑🏻 Player choice: ${playerChoice}\n` + `👾 Computer choice: ${computerChoice}`);

  if (playerChoice === computerChoice) {
    console.log("🟡 IT'S A TIE!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    console.log("🧑🏻 PLAYER WINS THIS ROUND!");
  } else {
    computerScore++;
    console.log("👾 COMPUTER WINS THIS ROUND!");
  }

  console.log(`🧑🏻 Player score: ${playerScore}\n` + `👾 Computer score: ${computerScore}`);
}

function generateComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3); // Generate a random number from 1-3

  return computerChoice[randomNumber];
}

function getPlayerChoice() {
  const validOptions = ["rock", "paper", "scissors"];
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