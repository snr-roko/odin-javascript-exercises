const palindromes = function (str) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const palindrome = str.toLowerCase().split('').filter((text) => alphanumerical.includes(text)).join('');
  const reversePalindrome = palindrome.split('').reverse().join('')
  return palindrome === reversePalindrome; 
};

// Do not edit below this line
module.exports = palindromes;
