import React from 'react';
import './App.css';

function App() {
  const [currentcolor , setCurrentColor] = React.useState('red')
  const [isDisabled, setIsDisabled] = React.useState(false)
  const nextColor = currentcolor === 'red' ? 'blue' : 'red'
  return (
    <div className='App'>
      <button 
        onClick={() => setCurrentColor(nextColor)}
        style={{backgroundColor : currentcolor}}
        disabled={isDisabled}
      >
        Change to {nextColor}
      </button>
      <div>
        <label for='isDisabled'>{ isDisabled ? 'Enable' : 'Disable'} Button</label>
        <input 
        id='isDisabled'
        type='checkbox'
        defaultChecked={isDisabled}
        onChange={(e) => setIsDisabled(e.target.checked)}
        />
      </div>
      
    </div>
  );
}

export default App;
