// Surely you know about the famous Traveling Salesman problem ? If you have a list
//  of cities and the distances between each pair of cities, what is the shortest
//  possible route that visits each city and returns back to the starting point ?
//  Write a function that receives "n" number of paths and returns the total number
//  of possible paths that a salesman can travel.

//   ex) paths(4)-- > 24

const paths = n => {
  if (n === 1) {
    return n;
  }
  return n * paths(n - 1);
}

console.log(paths(4));
