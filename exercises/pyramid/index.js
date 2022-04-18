// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 1) {
  const spaces = (2 * n - 2 * row) / 2;
  console.log(
    " ".repeat(spaces) + "#".repeat(2 * row - 1) + " ".repeat(spaces)
  );
  if (n === row) {
    return;
  }
  pyramid(n, row + 1);
}

module.exports = pyramid;
