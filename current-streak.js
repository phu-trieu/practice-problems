// Have you been practicing your coding every day ? Now it's time for you to practice
//  by writing a function that accepts the current date and a list of dates and
//  returns how many days you have been on a streak for (in our case, how many
//  consecutive days you have been practicing coding). If the array is empty,
//  return 0.

const currentStreak = (currentDate, arr) => {
  if (arr.length === 0) return 0;
  let streak = 1;
  if (currentDate.setHours(0, 0, 0, 0) - arr[0] === 86400000) {
    streak++;
    const getTimes = arr.map(date => date.getTime()).sort((a, b) => b - a);
    for (let i = 0; i < getTimes.length; i++) {
      if (getTimes[i] - getTimes[i + 1] === 86400000) {
        streak++
      } else break;
    }
  }
  return `You have been on a streak for ${streak} ${(streak > 1 ? 'days' : 'day')}.`;
}

console.log(currentStreak(new Date(), [new Date('September 28, 2020'), new Date('September 26, 2020')]))
