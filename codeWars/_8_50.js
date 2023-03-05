function fakeBin(x){
    result = ""
    for (i of x) {
        parseInt(i) < 5 ? result += 0 : result += 1;
    }
    return result;
}

