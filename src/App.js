import React from 'react';
import './App.css';

function App() {
  const [currentcolor , setCurrentColor] = React.useState('red')
  const nextColor = currentcolor === 'red' ? 'blue' : 'red'
  return (
    <div className='App'>
      <button 
        onClick={() => setCurrentColor(nextColor)}
        style={{backgroundColor : currentcolor}}
      >
        Change to {nextColor}
      </button>
      <input type='checkbox'/>
    </div>
  );
}

export default App;
