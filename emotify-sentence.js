// Create a function that changes specific words into emoticons.Given a sentence as
// a string, replace the words smile, grin, sad and mad with their corresponding
// emoticons.

// word	emoticon
// smile :D
// grin :)
// sad :(
// mad: P

// Examples
// emotify("Make me smile") ➞ "Make me :D"

// emotify("Make me grin") ➞ "Make me :)"

// emotify("Make me sad") ➞ "Make me :("

// Notes
// The sentence always starts with "Make me".
// Try to solve this without using conditional statements like if/else or switch.

const emotify = str => {
  const split = str.split(' ');
  const emotes = {
    smile: ':D',
    grin: ':)',
    sad: ':(',
    mad: ':P'
  }
  return `Make me ${emotes[split[2]]}`;
}

console.log(emotify('Make me mad'));
