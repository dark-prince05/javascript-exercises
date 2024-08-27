const sumAll = function (start, end) {
  let res = 0;
  if (start < 0 || end < 0) return "ERROR";
  if (start % 1 != 0 || end % 1 != 0) return "ERROR";
  if (Number(start) !== start || Number(end) !== end) return "ERROR";

  if (start < end) {
    for (let i = start; i <= end; i++) {
      res += i;
    }
  } else {
    for (let j = start; j >= end; j--) {
      res += j;
    }
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
