let computerScore = 0;
let playerScore = 0;
const resultDisplay = document.querySelector(".result");

playGame(5);

async function playGame(rounds) {
  for (let i = 1; i <= rounds; i++) {
    const round = await playRound(i);

    // Exit if round isn't played when player exits
    if (round === null) {
      resultDisplay.innerHTML += "<p>Player left the game and there's no winner.</p>";
      return;
    }
  }

  if (playerScore === computerScore) {
    resultDisplay.innerHTML += "<p>🟡🟡🟡 THE GAME IS TIED! 🟡🟡🟡</p>";
  } else if (playerScore > computerScore) {
    resultDisplay.innerHTML += "<p>🧑🏻🧑🏻🧑🏻 PLAYER WINS THE GAME! 🧑🏻🧑🏻🧑🏻</p>";
  } else {
    resultDisplay.innerHTML += "<p>👾👾👾 COMPUTER WINS THE GAME! 👾👾👾</p>";
  }

  resultDisplay.innerHTML += `<p>FINAL SCORE:\n` + `🧑🏻 Player: ${playerScore}\n` + `👾 Computer: ${computerScore}</p>`;
}

async function playRound(round) {
  const playerChoice = await getPlayerChoice();
  const computerChoice = generateComputerChoice();

  // Return null to be passed to the playGame function if player presses exit
  if (playerChoice === "exit") { return null; }

  resultDisplay.innerHTML += `<p>ROUND: ${round}\n` + `🧑🏻 Player choice: ${playerChoice}\n` + `👾 Computer choice: ${computerChoice}</p>`;

  if (playerChoice === computerChoice) {
    resultDisplay.innerHTML += "<p>🟡 IT'S A TIE!</p>";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    resultDisplay.innerHTML += "<p>🧑🏻 PLAYER WINS THIS ROUND!</p>";
  } else {
    computerScore++;
    resultDisplay.innerHTML += "<p>👾 COMPUTER WINS THIS ROUND!</p>";
  }

  resultDisplay.innerHTML += `<p>🧑🏻 Player score: ${playerScore}\n` + `👾 Computer score: ${computerScore}</p>`;
}

function generateComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3); // Generate a random number from 1-3

  return computerChoice[randomNumber];
}

function getPlayerChoice() {
  return new Promise((resolve) => {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const exit = document.querySelector("#exit");

    const handleClick = (e) => {
      const playerChoice = e.target.textContent.toLowerCase();
      resolve(playerChoice); // Resolve the promise with the player's choice
    };

    rock.addEventListener("click", handleClick, { once: true });
    paper.addEventListener("click", handleClick, { once: true });
    scissors.addEventListener("click", handleClick, { once: true });
    exit.addEventListener("click", handleClick, { once: true });
  });
}

/**
 * @deprecated This function is being deprecated because it relies on the browser's `prompt` API,
 * which is not suitable for modern applications. Consider using a custom input mechanism
 * (e.g., a form or UI element) to collect player input.
 *
 * Suggested Replacement: Use a UI-based input method or pass player choice as a function parameter.
 */
function deprecatedGetPlayerChoice() {
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