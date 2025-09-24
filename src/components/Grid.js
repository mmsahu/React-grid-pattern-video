import React from "react";
import { getCellColor } from "../pattern";

const Grid = ({ grid }) => {
  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="grid-cell"
              style={{ backgroundColor: getCellColor(cell) }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
