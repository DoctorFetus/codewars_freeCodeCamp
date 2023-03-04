function countBy(x, n) {
    let z = [],
        i = 1;
    while (z.length != n) {
        if (i % x == 0) {
            z.push(i);
        }
        i++;
    }
    return z;
  }