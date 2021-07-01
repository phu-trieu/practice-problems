// In this kata you will have to calculate fib(n) where:

// fib(0) := 0
// fib(1) := 1
// fin(n + 2) := fib(n + 1) + fib(n)
// Write an algorithm that can handle n up to 2000000.

// Your algorithm must output the exact integer answer, to full precision.Also,
// it must correctly handle negative numbers as input.

const fib = n => {
  let arr = [0, 1];
  if (n === 0) return BigInt(arr[0]);
  if (Math.abs(n) === 1) return BigInt(arr[1]);
  for (let i = 1; i < Math.abs(n); i++) {
    if (n > 0) {
      const sum = arr[0] + arr[1];
      arr[0] = arr[1];
      arr[1] = sum;
    }
    if (n < 0) {
      const diff = arr[0] - arr[1];
      arr[0] = arr[1];
      arr[1] = diff;
    }
  }
  // return (n > 0 ? BigInt(arr[arr.length - 1]) : BigInt((arr[arr.length - 1])))
  return BigInt(arr[1]);

  // return (((Math.pow((1 + Math.sqrt(5)), n) - Math.pow((1 - Math.sqrt(5)), n)) / (Math.pow(2, n) * Math.sqrt(5))));
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(-1));
console.log(fib(-2));
console.log(fib(-3));
console.log(fib(-4));
console.log(fib(-5));
console.log(fib(-6));
console.log(fib(-7));
console.log(fib(-67));
console.log(fib(-68));
console.log(fib(-69));
console.log(fib(78));
// console.log(fib(-75));
// console.log(fib(-76));
// console.log(fib(-77));
