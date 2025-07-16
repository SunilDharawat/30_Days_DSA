// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

function checkParentheses(s) {
  if (s.length === 0) return false;

  let stack = [];
  let map = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      let top = stack.pop();
      if (top !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

s = "()";
console.log(checkParentheses(s));
