// Do you remember that first simple project you had to build during your bootcamp
//  - Rock, Paper, Scissors game ? You were perhaps not sure what you were supposed
//  to do at that time.Since you've either learned lots of more complicated coding
//  topics or built many applications, you should be able to quickly build a simple
//  RPS game today. Robin challenges you!

const rockPaperScissors = choice => {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.round(Math.random() * 2)];
  const announcement = `You played ${choice}. Computer played ${computerChoice}.`

  if (choice === computerChoice) {
    return announcement + ' It\'s a tie.';
  } else if (
    (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper') && computerChoice === 'rock' ||
    (choice === 'scissors' && computerChoice === 'paper')
    ) {
      return announcement + ' You won!';
    } else {
      return announcement + ' You lost!';
    }
}

console.log(rockPaperScissors('rock'));
