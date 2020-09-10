// Today's prompt is simple - write a function to determine how many days are left
// until Christmas!

const daysUntilChristmas = () => {
  let year = new Date().getFullYear();
  let christmas = new Date(`December 25, ${year}`).getTime();
  const currentDate = new Date().getTime();
  if (currentDate > christmas) {
    year++;
    christmas = new Date(`December 25, ${year}`).getTime();
  }
  return `${((christmas - currentDate) / 86400000).toFixed(2)} days until Christmas`;
}

console.log(daysUntilChristmas());
