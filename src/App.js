import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import { generateGrid } from "./pattern";

function App() {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(10);
  const [grid, setGrid] = useState(generateGrid(rows, cols));
  const [running, setRunning] = useState(false);

  useEffect(() => {
    setGrid(generateGrid(rows, cols));
  }, [rows, cols]);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setGrid(generateGrid(rows, cols));
    }, 1000);
    return () => clearInterval(interval);
  }, [running, rows, cols]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dynamic Grid Pattern</h1>

      <div>
        <label>Rows: </label>
        <input
          type="number"
          value={rows}
          min={5}
          onChange={(e) => setRows(Number(e.target.value))}
        />
        <label>Cols: </label>
        <input
          type="number"
          value={cols}
          min={5}
          onChange={(e) => setCols(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
      </div>

      <Grid grid={grid} />
    </div>
  );
}

export default App;
