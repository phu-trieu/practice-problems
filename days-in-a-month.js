// Write a function that accepts a month and a year as integers and returns the
// number of days in that specific month.

const daysInAMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
}

console.log(daysInAMonth(2, 2020));
