const recursiveSum = (array = []) => {
  if (!array.length) return 0;
  return array[0] + recursiveSum(array.slice(1));
};

console.log(recursiveSum([1,2,3,4,5]))