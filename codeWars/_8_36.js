function sumMul(n,m){
    if (n >= m) return "INVALID";
    let total = 0;
    for (let i = n; i < m; i++) {
        if (i % n == 0) total += i;
    }
    return total;
    }

    console.log(sumMul(2, 9))