// Western superstition considers Friday the 13th to be an unlucky day.Write a
// function that receives a month and year as numbers and returns whether that month
// contains a Friday 13th or not(true or false).Months are not preceded with 0, so
// January = 1, February = 2, etc.You can pass in the full year, like 2020 or 1975.

const fridayThe13th = (month, year) => {
  return new Date(year, (month - 1), 13).getDay() === 5;
}

console.log(fridayThe13th(4, 2020));
