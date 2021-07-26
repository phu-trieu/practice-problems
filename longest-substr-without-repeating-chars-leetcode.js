// Given a string s, find the length of the longest substring without repeating
// characters.



//   Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a
// substring.
//   Example 4:

// Input: s = ""
// Output: 0


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = s => {
  if (s === "") return 0;
  let lengthOfSubstr = 1;
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    let j = i + 1;
    while (j < s.length) {
      if (str.includes(s[j])) break;
      str += s[j];
      if (str.length > lengthOfSubstr) {
        lengthOfSubstr = str.length;
      }
      j++;
    }
  }
  return lengthOfSubstr;
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring("abcdefg"))
