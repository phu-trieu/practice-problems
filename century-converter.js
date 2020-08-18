// In trying to come up with an insult for your old - fashioned friend(jokingly,
//   of course), you ask "What century are you even from?" This made you think about
//   how to convert a year into century format - and you have no idea! After doing
//   a little research, you decide to come up with a function to save other people
//   from your misery in the future.Please write a function that takes in a year and
//   returns the corresponding century.You will only be allowed to input years from
//   1000 - 2010.

const centuryConverter = year => {
  if (year < 1000 || year > 2010) return console.log(`Please input a year between the years 1000 - 2010`);
  const century = Math.ceil(year / 100);
  return (century !== 21 ? console.log(`${century}th Century`) : console.log(`${century}st Century`));
}

centuryConverter(2005);
