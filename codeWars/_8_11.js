function countSheeps(arrayOfSheep) {
    let result = 0;
    for (i of arrayOfSheep) {
        if (i == undefined) {
            continue;
        } 
        result += i;
    }
    return result;
  }
