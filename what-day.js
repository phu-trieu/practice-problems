// Do you ever get confused when someone says "In 5 days from now..." ? Which day
// will it be ? Write a function that takes in an array of days(like["Monday",
// "Wednesday", "Thursday"]) and a single number n, and return an array of what day
//  it will be in n number of days.For the example provided above, if we asked what
//   day it would be in 3 days, we would return ["Thursday", "Saturday", "Sunday"]

const whatDay = (arr, n) => {
  // return new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(new Date());
  const days = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  }
  return days[arr[0]];
}

console.log(whatDay(['Monday', 'Wednesday', 'Thursday'], 3));
