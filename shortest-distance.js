// We'd love to share one of the interview questions asked during some bootcamp
// students' first round interview at a Korean tech company.She was given one -
// dimensional points array L = [1, 3, 4, 8, 13, 17, 20].The interviewer asked her
// to find a pair of the shortest distances, given the one - dimensional points.
// (Assume that the array of points is all sorted.).Can you ace the interview
// question ?

const shortestDistance = arr => {
  let smallest = arr[1] - arr[0];
  const pair = {
    pointA: null,
    pointB: null
  }
  arr.forEach((v, i, a) => {
    if (a[i] - a[i-1] < smallest) {
      smallest = a[i] - a[i-1];
      pair.pointA = a[i - 1];
      pair.pointB = a[i];
    }
  })
  return `${pair.pointA}, ${pair.pointB}`;
}

console.log(shortestDistance([1,5,10,11,13,16]));
