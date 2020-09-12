// You've been hired at a new company, and you earn one penny on your first day.
// However, for each sequential day of work, your base amount doubles. This mean
// that you will earn two pennies on your second day and four pennies on your third
// day. Write a function that, give a number of days that you provide, will return
// the total number of cumulative pennies that you will have.

const doubledPennies = days => {
  let initial = 1;
  let sum = 1;
  for (let i = 1; i < days; i++) {
    initial = initial * 2;
    sum += initial;
  }
  return sum;
}

console.log(doubledPennies(3));
