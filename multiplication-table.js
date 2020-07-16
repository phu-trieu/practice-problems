// Do you remember learning your multiplication tables ? For some, it was really
// easy.For others, they still have to perform multiplication using odd tricks.
// Today, we're all lucky, because we can practice by writing code that will print
// all the multiplication tables from 1 to X. The format could look something like
// this: '1 x 1 = 1' . Have fun taking a trip down memory lane!

const multiplicationTable = num => {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      console.log(`${i} x ${j} = ${i * j}`)
    }
  }
}

multiplicationTable(15);
