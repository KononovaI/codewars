/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1] */

// Solution:
const reverseSeq = n => {
  let resultArr = [];
  for (i = n; i > 0; i--) {
    resultArr.push(i)
  }
  return resultArr;
};