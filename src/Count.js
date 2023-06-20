import './App.css';
import { useState } from 'react';

export default function Counter(props) {
  const [counter, setCounter] = useState(0);

  // function handleCounterClick() {
  //   props.enabled ? setCounter(counter + 1) : setCounter(counter);
  // }

  function handleCounterClick() {
    props.enabled
      ? setCounter(counter + props.incrementBy)
      : setCounter(counter);
  }

  return (
    <>
      <div>
        <h2>{counter}</h2>
        <button onClick={handleCounterClick}>Add {props.incrementBy}</button>
      </div>
    </>
  );
}
