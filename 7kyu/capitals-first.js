/* Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me" */

// Solution:
function capitalsFirst(str){
  let strArr = str.split(" ");
  let onlyUpper = strArr.filter( (word) => {
    return word[0] === word[0].toUpperCase() && !/^[!@'=#+0-9]$/.test(word[0]); // Corrected and included RegEx otherwise didn't meet condition "If a word starts with a number or special character, skip the word and leave it out of the result."
  });
  let onlyLower = strArr.filter( (word) => {
    return word[0] === word[0].toLowerCase() && !/^[!@'=#+0-9]$/.test(word[0]); // Corrected and included RegEx otherwise didn't meet condition "If a word starts with a number or special character, skip the word and leave it out of the result.";
  });
  let result = onlyUpper.concat(onlyLower);
    return result.join(" ");
}