// In this kata you will have to calculate fib(n) where:

// fib(0) := 0
// fib(1) := 1
// fin(n + 2) := fib(n + 1) + fib(n)
// Write an algorithm that can handle n up to 2000000.

// Your algorithm must output the exact integer answer, to full precision.Also,
// it must correctly handle negative numbers as input.

const fib = n => {
  const arr = [0, 1];
  for (let i = 1; i < n; i++) {
    arr.push(arr[i] + arr[i - 1]);
  }
  return arr;
}

console.log(fib(25));
