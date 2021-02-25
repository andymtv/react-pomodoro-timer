import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [title, setTitle] = useState('default');
  const [timeLeft, setTimeLeft] = useState(0.1 * 60);

  setTimeout(() => {
    console.log(props.title);
    setTitle(title => {
      return title = props.title;
    })
  }, 4000);
  
  function startTimer() {
    setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return timeLeft - 1;

        // set timer to 0;
        return 0;
      });
    }, 1000)
  }

  function stopTimer() {
    setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000)
  }


  // padStart is used to add an extra 0 (zero) to the time
  // minutes and seconds are converted to string because 'padStart' works onli with strings
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, 0);
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, 0);

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
