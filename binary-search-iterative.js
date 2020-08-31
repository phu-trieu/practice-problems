const binarySearch = (num, arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(((right - left) / 2) + left);
    if (arr[mid] === num) {
      return mid
    } else if (arr[mid] > num) {
      right = mid - 1;
    } else if (arr[mid] < num) {
      left = mid + 1;
    }
  }
  return false;
}

console.log(binarySearch(36, [1, 6, 10, 15, 24, 26, 34, 36]));
