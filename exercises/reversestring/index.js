// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return [...str].reverse().join("");

  // return [...str].reduce((prev, curr) => {
  //   return curr + prev;
  // }, "");
}

module.exports = reverse;
