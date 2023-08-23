import React from 'react';
import './App.css';

function App() {
  const [change, setChange] = React.useState(false)
  return (
    <div className='App'>
      {
        change ? (
          <button 
            onClick={() => setChange(prevValue => !prevValue)} 
            style={{backgroundColor: 'blue'}} >Change to red</button>
        ):(
          <button 
            onClick={() => setChange(prevValue => !prevValue)} 
            style={{backgroundColor: 'red'}} >Change to blue</button>

        )
      }
    </div>
  );
}

export default App;
