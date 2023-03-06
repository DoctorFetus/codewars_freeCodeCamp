function isPalindrome(x) {
    return x.toLocaleLowerCase() == x.toLocaleLowerCase().split('').reverse().join('');
  }