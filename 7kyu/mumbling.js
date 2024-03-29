/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

// Solution:
function accum(s) {
	let sArr = s.toLowerCase().split(""); // Get all characters as lower cases and split to get the array
  
  let newArr = []; // Define blank array for next actions
  for (i = 0; i < sArr.length; i++) {
    newArr.push(sArr[i].repeat(i+1)); // Fulfill an empty array with strings repeated the appropriate number of times
  };
  
  let resultArr = newArr.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1); // Change the first character of the string to upper case
  });
  
  return resultArr.join("-"); // Merge the resulting array
}