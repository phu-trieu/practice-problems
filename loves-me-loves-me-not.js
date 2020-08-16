// You've most likely heard of the game Loves me, loves me not. Someone has a flower -
// each time the pluck off a petal, they say "Loves me"...then the next time they
// pluck off a flower, they say "Loves me not"... and so on and so on until they pull
// off the last petal. Whatever phrase they speak out when they pull off the last petal
// determines whether someone they have interest in loves them back or not.

// Write a function to simulate this game! Pass in a number of petals.Return "Loves
// me, Loves me not, Loves me...etc".On the LAST phrase, write it in ALL CAPS.

//   doYouLoveMe(4) ==> "Loves me, Loves me not, Loves me, LOVES ME NOT"

const lovesMeLovesMeNot = petals => {
  const str = [];
  for (let i = 0; i < petals; i++) {
    if (i % 2 === 0) {
      str.push('Loves me')
    } else {
      str.push('Loves me not')
    }
  }
  str[petals - 1] = str[petals - 1].toUpperCase();
  return console.log(str.join(', '));

  // console.log([...Array(n)].map((v, i) => ("Loves me" + (i % 2 ? " not" : ""))[i === n - 1 ? "toUpperCase" : "slice"]()).join(", "));

}

lovesMeLovesMeNot(5);
