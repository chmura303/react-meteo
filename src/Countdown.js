import { useState } from 'react';
import './App.css';

export default function Countdown() {
  const [count, setCount] = useState(5);
  const [lives, setLives] = useState(3);

  function handleCountdownClick() {
    if (count > 0) {
      setCount(count - 1);
    } else if (count === 0) {
      setCount(lives > 0 ? 5 : 0);
      setLives(lives > 0 ? lives - 1 : 0);
    }
  }

  return (
    <>
      <div className='clr-light bg-dark padding-small'>
        <h2>Attempts remaining: {count}</h2>
        <button onClick={handleCountdownClick}>Count down</button>
        <h3>Lives remaining: {lives}</h3>
      </div>
    </>
  );
}
