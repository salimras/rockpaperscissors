//Game of rock paper scissors

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


  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Choose rock, paper, or scissors:");
      let computerSelection = getComputerChoice();
      let result = playRound(playerSelection, computerSelection);
  
      appendToBody("Round " + (i + 1) + ": " + result);
  
      if (result.startsWith("You Win")) {
        playerScore++;
      } else if (result.startsWith("You Lose")) {
        computerScore++;
      }
    }
  
    appendToBody("Game Over! Final Score - You: " + playerScore + ", Computer: " + computerScore);
  
    if (playerScore > computerScore) {
      appendToBody("Congratulations! You're the overall winner!");
    } else if (playerScore < computerScore) {
      appendToBody("Better luck next time! The computer wins this time.");
    } else {
      appendToBody("It's a draw! Try again to find the true champion.");
    }
  }
  
  function appendToBody(text) {
    let newElement = document.createElement('p'); // Create a new <p> element
    newElement.textContent = text; // Set the text content of the new element
    document.body.appendChild(newElement); // Append the new element to the body of the document
  }

  game();
  


  

  
  
