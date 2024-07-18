// reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: 'olleh'

// factorial calculation
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)

// find longest word
function findLongestWord(str) {
  let words = str.split(" ");
  let maxLength = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  return maxLength;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: 5 (for the word 'jumps')
