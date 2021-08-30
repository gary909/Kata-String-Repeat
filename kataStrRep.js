function repeatStr (n, s) {
    var text = "";
    for (var i = 0; i < n; i++) {
        text = text + s;
    }
    return text;
  }

console.log(repeatStr(2, "ha ")); // Return "ha ha "
console.log(repeatStr(3, "*")); // Return "***"
console.log(repeatStr(5, "#")); // Return "#####"