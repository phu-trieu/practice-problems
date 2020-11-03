// You are having a technical interview with a senior engineer today.Unfortunately,
// you were too nervous last night and only slept for 2 hours.The interviewer asked
// you to design a function to determine whether a company employee includes
// Micheal Buble.Though you practiced many similar questions to the asked question,
// you couldn't concentrate. Instead of designing the actual function, alternatively,
// you decided to write in pseudocode. Write your pseudocode to at least surprise the
// interviewer.

const search = (arr, start, end) => {
  // sort arr and assign to "sorted" variable
  // if "start" not defined, set as 0
  // if "end" not defined, set as length of "sorted" - 1
  // define "mid" variable and set as average of "start" and "end"
  // check if end is less than or equal to start and if "sorted" at "mid" index isn't equal to "Michael Buble"
    // if true, return false
  // check if "sorted" at "mid" index is equal to "Michael Buble"
    // if true, return true
  // check if value at "mid" index of "sorted" is greater than "Michael Buble"
    // if true, return "search" function with "sorted" passed as arr argument, "start" passed as "start" argument, and "mid" - 1 as "end" argument
  // check if value at "mid" index of "sorted" is less than "Michael Buble"
    // if true, return "search" function with "sorted" passed as arr argument, "mid" + 1 passed as "start" argument, and "end" passed as "end" argument
}

console.log(search(['Kobe Bryant', 'Madonna', 'Snoop Dogg', 'Michael Buble']));
