function reverseList(list) {
    result = [];
    for (let i = 1; i <= list.length; i++) {
        result.push(list[list.length - i]);
    }
    return result;
}

console.log(reverseList([1, 2, 3])) 
