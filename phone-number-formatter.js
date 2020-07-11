// You're building a social networking platform and save your user's phone numbers
// as integers.However, when you display the phone number on their profile, it
// isn't formatted and looks pretty ugly. It's time to write a function that takes
// in 10 integers and returns the phone number as a formatted string.The string
// would look something like this: (123) 456-7890

const phoneNumberFormatter = number => {
  const str = number + '';

  console.log(`(${str[0]}${str[1]}${str[2]}) ${str[3]}${str[4]}${str[5]} - ${str[6]}${str[7]}${str[8]}${str[9]}`)
}

phoneNumberFormatter(1234567890);
