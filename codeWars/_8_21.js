function getGrade (s1, s2, s3) {
    const k = (s1 + s2 + s3) / 3;
    if (k >= 90) return "A";
    if (k >= 80) return "B";
    if (k >= 70) return "C";
    if (k >= 60) return "D";
    return "F"; 
  }