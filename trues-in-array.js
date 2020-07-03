// Create a function which console.logs the number of true values there are in an array.

const trueCounter = array => {
  if (array.length === 0) console.log(0);

  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      counter++;
    }
  }
  console.log(counter);
}

trueCounter([true, true, false, false, false, true, true]);
