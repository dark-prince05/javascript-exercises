const removeFromArray = function (arr, ...items) {
  const res = arr.filter((val) => {
    return !items.includes(val);
  });
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
