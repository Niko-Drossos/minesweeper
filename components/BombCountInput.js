import React, { useState } from 'react';

export default function BombCountInput({ onBombCountChange }) {
  const [bombCount, setBombCount] = useState(10);

  const handleBombCountChange = (event) => {
    const newBombCount = parseInt(event.target.value, 10);
    setBombCount(newBombCount);
    onBombCountChange(newBombCount);
  };

  return (
    <div>
      <label htmlFor="bombCount">Bomb Count</label>
      <input
        type="range"
        id="bombCount"
        name="bombCount"
        min="1"
        max="50"
        value={bombCount}
        onChange={handleBombCountChange}
      />
      <span>{bombCount}</span>
    </div>
  );
}
