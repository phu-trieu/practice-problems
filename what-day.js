// Do you ever get confused when someone says "In 5 days from now..." ? Which day
// will it be ? Write a function that takes in an array of days(like["Monday",
// "Wednesday", "Thursday"]) and a single number n, and return an array of what day
//  it will be in n number of days.For the example provided above, if we asked what
//   day it would be in 3 days, we would return ["Thursday", "Saturday", "Sunday"]

const whatDay = (arr, n) => {
  return new Date('Monday');
}

console.log(whatDay(['Monday', 'Wednesday', 'Thursday'], 3));
