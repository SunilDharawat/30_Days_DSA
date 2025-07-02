let fun = function (str) {
  if (str.length === 0) return "";
  let prefix = "";

  for (let i = 0; i < str[0].length; i++) {
    let char = str[0][i];

    for (let j = 1; j < str.length; j++) {
      if (i >= str[j].length || str[j][i] !== char) {
        return prefix; // return what we found so far
      }
    }
    prefix += char;
  }
  return prefix;
};
str = ["flower", "flow", "flight"];
console.log(fun(str));
