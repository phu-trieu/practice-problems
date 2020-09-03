// Let's try working with the Fibonacci sequence again. Each term in the Fibonacci
// sequence is the sum of the two preceding terms. If you start with 1 and 2, this
// sequence is: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...What is the total number of
// all even numbers in the Fibonacci sequence that are less than 3,000,000?

const fibonacciEvens = num => {
  const arr = [1,2];
  let counter = 0;
  while (arr[arr.length - 1] < num) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  arr.map(x => {
    if (x % 2 === 0 && x < 3000000) {
      counter++
    }
  })
  return counter;
}

console.log(fibonacciEvens(3000000));
