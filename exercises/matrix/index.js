// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
  }

  let counter = 1;
  let row = 0;
  let endRow = n - 1;
  let col = 0;
  let endCol = n - 1;
  while (counter <= n * n) {
    for (let c = col; c <= endCol; c++) {
      arr[row][c] = counter;
      counter++;
    }
    row++;
    for (let r = row; r <= endRow; r++) {
      arr[r][endCol] = counter;
      counter++;
    }
    endCol--;
    for (let c = endCol; c >= col; c--) {
      arr[endRow][c] = counter;
      counter++;
    }
    endRow--;
    for (let r = endRow; r >= row; r--) {
      arr[r][col] = counter;
      counter++;
    }
    col++;
  }

  return arr;
}

module.exports = matrix;
