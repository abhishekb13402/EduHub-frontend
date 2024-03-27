function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    const result = document.getElementById('result');
    let message;
  
    if (playerChoice === computerChoice) {
      message = 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      message = 'You win!';
    } else {
      message = 'Computer wins!';
    }
  
    result.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${message}`;
  }
  