// Thanos believes that in order to balance the program, half of the elements in the
// list should be randomly deleted.Write an Infinity Gauntlet program that randomly
// deletes and returns half of the elements in the input list when Thanos bounces a
// finger(when running the program).(Since it is randomly deleted, the output value
//   must be different every time even if the input value is the same)



// Input example: [2, 3, 1, 6, 5, 7]

// Output example 1: [2, 5, 7]

// Output example 2: [3, 6, 5]

const thanosArray = array => {
  let length = array.length;
  while (length) {
    const random = Math.floor(Math.random() * length--);
    let placeholder;

    placeholder = array[length];
    array[length] = array[random];
    array[random] = placeholder;
  }
  return console.log(array.slice(0, array.length/2));
}

thanosArray([1,2,3,4,5,6,7])
