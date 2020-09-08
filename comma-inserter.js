// Sometimes, you may be too lazy to add a comma between 0s to separate every
// thousand.If you have your own converter that will just print out a number with
// commas in right position you'd be happy! Today, write a function that converts
// numeric strings to comma-separated strings. ※ However, do not use the money
// conversion library supported by the programming language.

// For example, 2000 -- > 2, 000 | -1224.10 -- > -1, 224.10

// const commaInserter = str => {
//   return str.replace(/(\d)(?=(\d{3})+$)/gi, '$1,')
// }

const commaInserter = str => {
  const arr = str.split('');
  let start = arr.indexOf('.');
  let length = arr.length;
  if (Number(str) > 0 && start > 0) {
    for (let i = start - 1; i > 0; i--) {
      if ((start - i) % 3 === 0) {
        arr.splice(i, 0, ',');
        start = i;
      }
    }
  }
  else if (Number(str) < 0 && start < 0) {
    for (let i = length - 1; i > 1; i--) {
      if ((length - i) % 3 === 0) {
        arr.splice(i, 0, ',');
        length = i;
      }
    }
  }
  else if (Number(str) < 0 && start > 0) {
    for (let i = start - 1; i > 1; i--) {
      if ((start - i) % 3 === 0) {
        arr.splice(i, 0, ',');
        start = i;
      }
    }
  }
  else {
    for (let i = length - 1; i > 0; i--) {
      if ((length - i) % 3 === 0) {
        arr.splice(i, 0, ',');
        length = i;
      }
    }
  }
  return arr.join('');
}

console.log(commaInserter('-1224.10'));
