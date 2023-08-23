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
    </div>
  );
}

export default App;
