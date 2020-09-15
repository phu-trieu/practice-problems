// Write a function that receives a string and checks if that string has equal
// numbers of 'x's and 'o's.If it does, return true.Otherwise, return false.If there
// are no 'x's or 'o's, return true.

const kissesHugs = str => {
  if (!str.includes('x') && !str.includes('o')) return true;
  const x = str.split('').filter(letter => letter === 'x').length;
  const o = str.split('').filter(letter => letter === 'o').length;
  return (x === o ? true : false);
}

console.log(kissesHugs('xoxo'), kissesHugs('xoxoo'), kissesHugs('hug, hug, kees, kees, hug, hug, big kees, little hug, kees, kees, little kees'));
