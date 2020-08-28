// Write a function that accepts a string and returns the string with alternating
// case.For example, "Hi there" would turn into "hI tHeRe".Make sure to ignore spaces!

const spongebobCase = str => {
  const split = str.split(' ').map(x => x.split(''));
  let a = true;

  return split
  .map(x => x.map(y => {
    if (a) {
      a = !a;
      return y.toLowerCase();
    } else {
      a = !a;
      return y.toUpperCase();
    }
  }))
  .map(x => x.join(''))
  .join(' ')
}

console.log(spongebobCase('Good evening Mr Wayne'));
