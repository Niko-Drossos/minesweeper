import React, { useState, useEffect } from 'react';
import styles from './square.module.css';

export default function Square({ rowIndex, colIndex, checkSquares, gameEnd, resetGame }) {
  const [result, setResult] = useState(null);



  useEffect(() => {
    if (resetGame) {
      setResult("");
    }
  }, [resetGame])

  useEffect(() => {
    if (gameEnd) {
      setResult(checkSquares({ rowIndex, colIndex }));
    }
  }, [gameEnd])

  const handleClick = (e) => {
    if (e.target.innerText === '🚩' || gameEnd) {
      return;
    }
    const newResult = checkSquares({ rowIndex, colIndex });
    setResult(newResult);
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default context menu
    if (e.target.innerText === '🚩' || gameEnd) {
      setResult('');
    } else if (!e.target.innerText) {
      setResult('🚩');
    }
  };

  return (
    <div
      className={styles.square}
      onClick={handleClick}
      onContextMenu={handleContextMenu} // Trigger on right-click
    >
      {result !== null ? result : ""}
    </div>
  );
}
