// Write the function that takes three dimensions of a brick: height(a), width(b)
// and depth(c) and returns true if this brick can fit into a hole with the width(w)
// and height(h).

const doesBrickFit = (a, b, c, w, h) => {
  return ((a <= w && b <= h) || (a <= h && c <= w) || (c <= h && b <=w));
}

console.log(doesBrickFit(1, 1, 1, 1, 1))
