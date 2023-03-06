function  calculateAge(a, b) {
    if (a < b) {
        return b - a == 1 ? `You are ${b - a} year old.` :  `You are ${b - a} years old.`;
    }
    else if (a > b) {
        return a - b == 1 ? `You will be born in ${a - b} year.`: `You will be born in ${a - b} years.`;
    }
    else return "You were born this very year!";
    
    }
    
    