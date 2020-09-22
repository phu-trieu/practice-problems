// Do you remember that first simple project you had to build during your bootcamp
//  - Rock, Paper, Scissors game ? You were perhaps not sure what you were supposed
//  to do at that time.Since you've either learned lots of more complicated coding
//  topics or built many applications, you should be able to quickly build a simple
//  RPS game today. Robin challenges you!

const rockPaperScissors = choice => {
  const choices = ['rock', 'paper', 'scissors'];
  console.log(Math.round(Math.random() * 2))
  const computerChoice = choices[Math.round(Math.random() * 2)];
  console.log(computerChoice);

  const announcement = `You played ${choice}. Computer played ${computerChoice}.`

  if (choice === 'rock' && computerChoice === 'rock') return announcement + ' It\'s a tie.';
  if (choice === 'rock' && computerChoice === 'paper') return announcement + ' You lost.';
  if (choice === 'rock' && computerChoice === 'scissors') return announcement + ' You won!';
}

console.log(rockPaperScissors('rock'));
