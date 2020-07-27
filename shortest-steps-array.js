// Write a function that, when given a list of integers, prints the pair of numbers
// with the shortest number of steps in between.In this case, you can assume that
// the array of points is already sorted.For example, if S = { 1, 3, 4, 8, 13, 17, 20}
// is given, the result will be(3, 4).

const shortestStepsArr = arr => {
  for (let i = 1; i < arr.length; i++) {
    let difference = Math.abs(arr[i] - arr[i-1]);
    console.log(difference)

  }
}

shortestStepsArr([1,3,4,8,12,17,20])
