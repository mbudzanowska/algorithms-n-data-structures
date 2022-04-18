// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//       str += j <= i ? "#" : " ";
//     }
//     console.log(str);
//   }
// }

function steps(n, row = 1) {
  console.log("#".repeat(row) + " ".repeat(n - row));
  if (n === row) {
    return;
  }
  steps(n, row + 1);
}

module.exports = steps;
