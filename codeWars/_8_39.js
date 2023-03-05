function correct(string)
{
    string = string.replaceAll("0", "O");
    string = string.replaceAll("5", "S")
    string = string.replaceAll("1", "I")
    return string;
}

console.log(correct("L0ND0N"))