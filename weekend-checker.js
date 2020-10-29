// Who doesn't love the weekend!? Can you write a function that, given a date in
// the following format, returns whether that date is a weekend or not?
// FORMAT: Oct 11, 2010

const weekendChecker = date => {
  return new Date(date).getDay() === 6 || new Date(date).getDay() === 0;
}

console.log(weekendChecker('Oct 11, 2010'));
