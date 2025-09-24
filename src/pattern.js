
// pattern.js
export const generateGrid = (rows, cols) => {
  let grid = [];
  for (let r = 1; r <= rows; r++) {
    let row = [];
    for (let c = 1; c <= cols; c++) {
      const num = (r - 1) * cols + c;
      row.push(num);
    }
    grid.push(row);
  }
  return grid;
};

// Example rule: return color based on number
export const getCellColor = (num) => {
  if (num <= 10 || num % 20 === 0) return "green"; // first row & multiples of 20
  if (num % 7 === 0) return "red";
  if (num % 5 === 0) return "blue";
  return "black";
};
