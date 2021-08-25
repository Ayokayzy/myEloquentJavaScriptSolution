function isEven (num) {
  if (num == 1) {
      return "Odd"
  }else if (num == 0) {
      return "Even"
  }else if(num < 0) {
      return "undefined"
  }else {
    return isEven(num - 2);
  }
}
