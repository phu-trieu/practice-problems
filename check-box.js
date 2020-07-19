// What's in the box!? Let's check first if there is actually something IN the box
// before we figure out WHAT it is...

// Check if the asterisk is inside of the box.The function you write must return
// true only if the asterisk is INSIDE - not if it is anywhere else on or outside
// of the box.

// For example:

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) ➞ true

// inBox([
//   "*####",
//   "# #",
//   "#  #*",
//   "####"
// ]) ➞ false

const checkBox = arr => {
  if (!arr.join('').includes('*')) return console.log(false);
  if (arr[0].includes('*') || arr[arr.length-1].includes('*')) return console.log(false);
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i].includes('*')) {
      if (arr[i][0] === '*' || arr[i][arr[i].length-1] === '*') return console.log(false);
    }
  }
  return console.log(true)
}

checkBox([
  "####",
  "# #",
  "#  #",
  "##*##"
]);
