let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, compGuess, targetNum) => {
  
  if (humanGuess === compGuess) {
    return true;
  } else if (Math.abs(humanGuess - targetNum) > Math.abs(compGuess - targetNum)) {
    return false  
    } else {
      return true;
    }
};

const updateScore = (string) => {
  if (string === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
}