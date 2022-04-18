// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let char = "";

  [...str].reduce((prev, curr) => {
    const newObj = { ...prev, [curr]: prev[curr] ? prev[curr] + 1 : 1 };
    if (newObj[curr] > max) {
      (char = curr), (max = newObj[curr]);
    }
    return newObj;
  }, {});

  return char;
}

module.exports = maxChar;
