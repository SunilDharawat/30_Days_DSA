// Roman Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const romanInt = function (str) {
  if (str.length === 0) return 0;
  const romanMapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (romanMapping.hasOwnProperty(str.charAt(i))) {
      const current = romanMapping[str.charAt(i)];
      const next = romanMapping[str.charAt(i + 1)];

      if (next && current < next) {
        sum -= current;
      } else {
        sum += current;
      }
    }
  }
  return sum;
};

// s = "III";
// s = "LVIII";
s = "MCMXCIV";
console.log(romanInt(s));
