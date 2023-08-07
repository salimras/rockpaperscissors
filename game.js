//Game of rock paper scissors

//Initialize scores of computer and player = 0
let playerScore = 0;
let computerScore  = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
    // Make the playerSelection case insensitive
    playerSelection = playerSelection.toLowerCase();
  
    let message = `Computer chose ${capitalizeFirstLetter(computerSelection)}! `;
  
    if (playerSelection === computerSelection) {
      return [message + `It's a draw! Both chose ${playerSelection}`, null];
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      return [message + `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`, "win"];
    } else {
      return [message + `${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`, "lose"];
    }
  }
  
  // Helper function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  // Event listeners for the buttons:
  document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
  });

  document.getElementById('paper').addEventListener('click', function() {
      playGame('paper');
  });

  document.getElementById('scissors').addEventListener('click', function() {
      playGame('scissors');
  });


  function playGame(playerSelection) {
    let computerSelection = getComputerChoice();
    let [roundMessage, result] = playRound(playerSelection, computerSelection);

    if (result === "win") {
      playerScore++;
    } else if (result === "lose") {
      computerScore++;
    }
    
    let scoreMessage = "Current Score - You: " + playerScore + ", Computer: " + computerScore;
    
    // Update the result text with both the round result and the current scores
    updateResultText(roundMessage + "<br>" + scoreMessage);
  
    // Check if any player reached 5 points
    if (playerScore === 5 || computerScore === 5) {
      if (playerScore > computerScore) {
        updateResultText("Congratulations! You're the overall winner!");
      } else if (playerScore < computerScore) {
        updateResultText("Better luck next time! The computer wins this time.");
      } else {
        updateResultText("It's a draw! Try again to find the true champion.");
      }

      // Reset the scores to play again
      playerScore = 0;
      computerScore = 0;
    }
  }
    
  function updateResultText(text) {
    let resultElement = document.getElementById('resulttext');
    resultElement.innerHTML = text;
  }
  


  

  
  
