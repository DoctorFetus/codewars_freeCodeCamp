function passed (list) { 
    let score = 0;
        pass = 0;
    for (i of list) {
        if (i <= 18) {
            score += i;
            pass++;
        }
    }
    return score ? Math.round((score / pass)) : "No pass scores registered.";
}