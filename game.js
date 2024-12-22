let computerScore = 0;
let playerScore = 0;

playGame(5);

async function playGame(rounds) {
  for (let i = 1; i <= rounds; i++) {
    const round = await playRound(i);

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

async function playRound(round) {
  const playerChoice = await getPlayerChoice();
  const computerChoice = generateComputerChoice();

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
  return new Promise((resolve) => {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    const handleClick = (e) => {
      const playerChoice = e.target.textContent.toLowerCase();
      resolve(playerChoice); // Resolve the promise with the player's choice
    };

    rock.addEventListener("click", handleClick, { once: true });
    paper.addEventListener("click", handleClick, { once: true });
    scissors.addEventListener("click", handleClick, { once: true });
  });
}

/**
 * @deprecated This function is being deprecated because it relies on the browser's `prompt` API,
 * which is not suitable for modern applications. Consider using a custom input mechanism
 * (e.g., a form or UI element) to collect player input.
 *
 * Suggested Replacement: Use a UI-based input method or pass player choice as a function parameter.
 */
// function deprecatedGetPlayerChoice() {
//   const validOptions = ["rock", "paper", "scissors"];
//   let playerChoice;

//   do {
//     playerChoice = prompt("Enter a choice from rock, paper, or scissors.");

//     if (playerChoice === null) {
//       console.log("Thanks for playing.");
//       break;
//     } else if (playerChoice === "") {
//       console.log("Input can't be empty. Enter a choice from rock, paper, or scissors.");
//       continue;
//     }

//     playerChoice = playerChoice.trim().toLowerCase();

//     if (!validOptions.includes(playerChoice)) {
//       console.log("Invalid input. Enter a choice from rock, paper, or scissors.");
//     }
//   } while (!validOptions.includes(playerChoice));

//   return playerChoice;
// }