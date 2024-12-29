// Time complexity = O(n)
// Space Complexity = O(n)

function isPalindromeBruteForce(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}


// Time complexity = O(n)
// Space Complexity = O(1)
function isPalindromeOptimal(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}

console.log(isPalindromeBruteForce('racecar'), isPalindromeOptimal('racecar'))
console.log(isPalindromeBruteForce('polo'), isPalindromeOptimal('polo'))