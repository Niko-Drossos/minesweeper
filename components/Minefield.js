import { useState, useEffect } from 'react'
import Square from '../components/Square'


export default function Minefield({ minefield, checkSquares, gameEnd, resetGame }) {
  return (
    <>
      {minefield ? minefield.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((col, colIndex) => (
            <Square key={`${rowIndex}-${colIndex}`} {...{ rowIndex, colIndex, checkSquares, gameEnd, resetGame }} />
            ))}
        </div>
      )) : ""}
    </>
  )
} 