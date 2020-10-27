// When building web applications, it's often nice to format phone numbers that
// users input on their own so that the user only has to input numbers. Write a
// function that accepts ten numbers in an array and formats it like this:
// "(123) 456-7890

const phoneNumberFormatter = arr => {
  return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
}

console.log(phoneNumberFormatter([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
