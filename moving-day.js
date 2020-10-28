// It's almost moving day! You have various boxes of different sizes and want to
// know the total volume of all the boxes together. Why don't you write a function
// that calculates the volume? The function will receive multiple arrays - each
// array will represent a box. The arrays will have three elements each: length,
// width, and height. Good luck!

const movingDay = multiArr => {
  return multiArr.reduce((acc, current) => acc + (current[0] * current[1] * current[2]), 0);
}

console.log(movingDay([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
