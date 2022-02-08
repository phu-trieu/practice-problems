const excludeList = ['foo', 'bar', 'baz'];
const data = ['foo', 'ofoo', 'bar', 'abara', 'qux', 'hex', 'next', 'text'];

const getOnlyAllowedData = (excludeList, data) => {
  const obj = {};

  data.forEach(value => obj[value] = value);

  excludeList.forEach(value => {
    if (obj[value]) {
      delete obj[value];
    }
  })

  return Object.keys(obj);
};

console.log(getOnlyAllowedData(excludeList, data));
