/* Task
Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself. */

// Solution:
function flickSwitch(arr){
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != "flick" && arr[i-1] != false) {
      arr[i] = true
    } else if (arr[i] === "flick" && arr[i-1] != false) {
      arr[i] = false
    } else if (arr[i] != "flick" && arr[i-1] != true) {
      arr[i] = false
    } else if (arr[i] === "flick" && arr[i-1] != true) {
      arr[i] = true
    }
  }
  return arr;
}

/* Shorter solution:
function flickSwitch(arr){
	let boolean = true;
	let result = arr.map( (item) => {
		return (item === "flick") ? boolean = !boolean : boolean;
	})
	return result;
} */