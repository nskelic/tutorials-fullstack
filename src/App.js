import { useState } from "react";
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [showError, setShowError] = useState(false);
  const [counterArray, setCounterArray] = useState([]);

  const increaseCounter = () => {
    if(showError) {
      setShowError(false);
    }
    if(!counterArray.includes(counter+1))
      setCounterArray([...counterArray, counter+1]);
    setCounter(counter+1);
  }

  const decreaseCounter = () => {
    if(counter === 0){
      setShowError(true);
      return;
    }
    if(!counterArray.includes(counter-1))
      setCounterArray([...counterArray, counter-1]);
    setCounter(counter-1);
  }

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
      {showError && (
        <div className="box">
          Value cannot be lower than zero!
        </div>)
      }
      {counterArray.map(el => <div>{el} was counted</div>)}
    </div>
  );
}

export default App;
