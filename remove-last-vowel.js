// Do you remember how to write a function that removes the last vowel from each
// word in a sentence ? You must only remove the LAST instance of a vowel.For
// example, "book" would turn into "bok".

const removeLastVowel = str => {
  return str.replace(/[aeiou]([^aeiou]*?)(?= |$)/gi, '$1');
}

console.log(removeLastVowel('Hey, VSauce Michael here'));
