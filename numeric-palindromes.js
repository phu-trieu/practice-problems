// convert num to str
// split str
// compare str to reverse str


const numericPalindromes = num => {
  const reverse = Number(String(num).split('').reverse().join(''));
  return (num === reverse ? num : 'Not a palindrome');
}

console.log(numericPalindromes(12221));
