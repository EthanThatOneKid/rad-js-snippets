const chainify = (...chain) => arg => chain.reduce((a, b) => b(a), arg);

const sum = (num, ...nums) => nums.length > 0
  ? num + sum(nums.shift(), ...nums)
  : num;

const checkArraysAreIdentical = (array1, array2, ...arrays) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return arrays.length > 0
    ? checkArraysAreIdentical(array2, arrays.shift(), ...arrays)
    : true;
};
