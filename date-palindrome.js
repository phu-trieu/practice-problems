// February 2nd, 2020 is a palindrome when viewed in mm / dd / yyyy and dd / mm / yyyy
//  formats.Can you write a function that returns true if the date provided is a
//  palindrome in both formats ?

// 03/03/3030;

const datePalindrome = date => {
  const month = date.getMonth();
  const date2 = date.getDate();
  const year = date.getFullYear();
  const mmFormat = `${(month < 9 ? '0' + (month + 1) : month + 1)}${(date2 < 10 ? '0' + date2 : date2)}${year}`;
  const ddFormat = `${(date2 < 10 ? '0' + date2 : date2)}${(month < 9 ? '0' + (month + 1) : month + 1)}${year}`;
  return (mmFormat === mmFormat.split('').reverse().join('') && ddFormat === ddFormat.split('').reverse().join(''));
}

console.log(datePalindrome(new Date('March 3, 3030')));
console.log(datePalindrome(new Date('March 4, 3030')));
