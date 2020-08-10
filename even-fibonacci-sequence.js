// Each term in the Fibonacci sequence is the sum of the two preceding terms.If you
// start with 1 and 2, this sequence is:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// What is the total number of all even numbers in the Fibonacci sequence that are
// less than 4, 000, 000 ?

const evenFibonacciSequence = () => {
  const arr = [1,2,3];
  let evenCounter = 1;
  while (arr[arr.length - 1] < 4000000) {
    let last = arr[arr.length - 1];
    let secondLast = arr[arr.length - 2];
    if (last % 2 === 0) {evenCounter++;}
    arr.push(last + secondLast);
  }
  return console.log(evenCounter);
}

evenFibonacciSequence();
