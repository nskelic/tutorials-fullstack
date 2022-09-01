import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counter/counterSlice'
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const increaseCounter = () => {
    dispatch(increment())
  }

  const decreaseCounter = () => {
    dispatch(decrement())
  }

  const onChangeValue = (event) => {
    if(!Number(event.target.value)) return;
    setInput(event.target.value)
  }

  const increaseValueByAmount = () => {
    dispatch(incrementByAmount(Number(input)))
  }

  console.log('Counter', counter);

  return (
    <div>
      <div style={{
        display: 'flex'
      }}>
        <button onClick={decreaseCounter}>
          -
        </button> 
        <p style={{maxHeight: '5px', margin: 0}}>
          {counter}
        </p>
        <button onClick={increaseCounter}>
          +
        </button> 
      </div>
      <div>
        <input value={input} onChange={onChangeValue}></input>
        <button onClick={increaseValueByAmount}>Add amount</button>
      </div>
    </div>
  );
}

export default App;
