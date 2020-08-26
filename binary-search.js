// Let's refresh one of the most basic and famous algorithm topics - Binary Search.
// Here's a fundamental search challenge for you to tackle! Binary search algorithms
// are often efficient, and they work by repeatedly dividing the list in half and
// working with the portion that may contain the item being looked for until the
// possible location is narrowed down to just one element.Try giving it a shot!

const binarySearch = (n, arr, left, right) => {
  const sorted = arr.sort((a, b) => a - b);
  if (left === undefined) left = 0;
  if (right === undefined) right = sorted.length - 1;
  let mid = Math.floor(((right - left) / 2) + left);
  if (right <= left && sorted[mid] !== n) {
    return false;
  } else if (sorted[mid] === n) {
    return mid
  } else if (sorted[mid] > n) {
    return binarySearch(n, sorted, left, mid - 1)
  } else if (sorted[mid] < n) {
    return binarySearch(n, sorted, mid + 1, right)
  }
}

console.log(binarySearch(1000, [1,3,45,27,18,99,69,42]));
