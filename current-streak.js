// Have you been practicing your coding every day ? Now it's time for you to practice
//  by writing a function that accepts the current date and a list of dates and
//  returns how many days you have been on a streak for (in our case, how many
//  consecutive days you have been practicing coding). If the array is empty,
//  return 0.

const currentStreak = arr => {
  if (arr.length === 0) return 0;
  let counter = 1;
  arr.map(date => {
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  })
  .sort((a, b) => b - a)
  .map((v, i, a) => {
    if (a[i] - a[i+1] === 86400000) {
      counter++
    } else return;
  })
  return `You have been on a streak for ${counter} days.`
}

console.log(currentStreak([new Date(), new Date('September 26, 2020'), new Date('September 25, 2020')]))
