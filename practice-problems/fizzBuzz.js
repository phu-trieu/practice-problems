// given a number, count up to that number
// if a number is a multiple of 3, console log "fizz"
// if a number is a multiple of 5, console log "buzz"
// if a number is a multiple of 15, console log "fizzbuzz"
// otherwise, simple console log the number

const fizzBuzz = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) console.log('fizzbuzz')
    else if (i % 3 === 0) console.log('fizz')
    else if (i % 5 === 0) console.log('buzz')
    else console.log(i)
  }
}

fizzBuzz(50);
