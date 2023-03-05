function abbrevName(name){
    const names = name.toLocaleUpperCase().split(" ");
    return `${names[0][0]}.${names[1][0]}`;

}