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
  
    // Compare playerSelection and computerSelection to determine the winner
    if (playerSelection === computerSelection) {
      return "It's a draw! Both chose " + playerSelection;
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      return "You Win! " + capitalizeFirstLetter(playerSelection) + " beats " + computerSelection;
    } else {
      return "You Lose! " + capitalizeFirstLetter(computerSelection) + " beats " + playerSelection;
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
    let result = playRound(playerSelection, computerSelection);

    updateResultText(result);

    if (result.startsWith("You Win")) {
      playerScore++;
    } else if (result.startsWith("You Lose")) {
      computerScore++;
    }
    
    
    // Update and display the running score
    updateResultText("Current Score - You: " + playerScore + ", Computer: " + computerScore);
  
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
    resultElement.textContent = text;
  }
  


  

  
  
