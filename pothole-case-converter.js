// Some programming languages like Python prefers Pothole case over Camel case.

// For instance: in JavaScript, you’d write yellowMonkey but in Python you’d write
// yellow_monkey.In case you forget, you should just build a function where you
// convert any string in Camel case to Pothole case.

const potholeCaseConverter = str => {
  const regex = /(?<=[a-z])(?=[A-Z])/g;
  return console.log(str.split(regex).map(string => string.toLowerCase()).join('_'));
}

potholeCaseConverter('fooBarFoo');
