function noBoringZeros(n) {
    if (n == 0) return 0;
    num = Math.abs(n)
    while (num % 10 == 0) {
        num /= 10;
    }
    return n > 0 ? num : -num ;
  }
  console.log(noBoringZeros(0))
  