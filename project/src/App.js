import React, {useState, useRef} from 'react';
import './App.css';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

export default function App() {
  const [title, setTitle] = useState('Pomodoro begin!!!')
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  let intervalRef = useRef(null)

  function startTimer(e) {
    if ( intervalRef.current !== null) return;


    setTitle(`You're doing great!`)
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft > 1) return timeLeft - 1; 


        if (timeLeft === 1) {
          setTitle(title => (title = 'Keep it up!'));
          return timeLeft - 1;
        }

        resetTimer();
        return 0;
      })
    }, 1000)

  }

  function stopTimer(e) {
    if ( intervalRef.current === null) return;


    clearInterval(intervalRef.current)
    setTitle('Keep it up!')
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    setTitle('Ready to go another round?');
    setTimeLeft(25 * 60);
  }



  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
