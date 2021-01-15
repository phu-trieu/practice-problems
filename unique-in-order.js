// Implement the function unique_in_order which takes as argument a sequence and
// returns a list of items without any elements with the same value next to each
// other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]

const uniqueInOrder = seq => [...seq].filter((v, i, a) => {
    if (v !== a[i + 1]) return v
  })


console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder('122333'));
console.log(uniqueInOrder([1, 2, 2, 3, 3, 3]));
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
