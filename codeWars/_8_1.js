function whatday(num) { 
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if (num > 0 && num < 8) {
        return days[num - 1]
    }
    return "Wrong, please enter a number between 1 and 7"
  }
