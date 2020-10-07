// I'm sure by now you know that computers operate in binary, right? Just a whole
// bunch of 0s and 1s. These are very powerful numbers. A computer's processor is
// made up of circuits that are composed of billions of transistors - switches that
// are activated by the electronic signals it receives.The 1s and 0s reflect each
// on and off state of a transistor.

// Can you write a function that accepts a string of 0s and 1s and returns true if
// every consecutive sequence of 1s is followed by a consecutive sequence of 0s of
// the same length.

// For example:

// 111000110010 -- > true

// 1001101110 -- > false

const onesAndZeros = str => {
  if (str[str.length - 1] === '1') return false;
  let oneCounter = 0;
  let zeroCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1' && str[i - 1] === '0') {
      if (oneCounter !== zeroCounter) return false;
      oneCounter++;
    } else if (str[i] === '1' && str[i - 1] !== '0') {
      oneCounter++;
    } else {
      zeroCounter++;
    }
  }
  return oneCounter === zeroCounter;
}

console.log(onesAndZeros('111000110010'));
