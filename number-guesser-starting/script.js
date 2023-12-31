let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Function to supply random number between 0 - 9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// Get absolute distance between human or compter guesses and the magic number
const getAbsoluteDistance = (input, magic) => {
  return Math.abs(input - magic);
}

// Function to compare if the human or computer guesses match the magic number.
const compareGuesses = (user, computer, magic) => {
  // User wins
  if (user == magic) {
    return true;
  // Comp wins
  } else if (computer == magic) {
    return false;
  // User wins if computer chose the same
  } else if (user == computer) {
      return true
  // Choose winner based on who is closer
  } else if (getAbsoluteDistance(user, magic) < getAbsoluteDistance(computer, magic)) {
    return true;
  } else {
    return false;
  }
}

// Increment the score by 1 depending on who won
const updateScore = winner => {
  switch(winner) {
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
  }
}

// Increment round number by one
const advanceRound = () => {
  currentRoundNumber++;
}