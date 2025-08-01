import { useState, useRef, useEffect } from "react";
import BreakControl from "./components/BreakControl";
import SessionControl from "./components/SessionControl";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import Title from "./components/Title";
import "./styles.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [onSession, setOnSession] = useState(true);
  const timerRef = useRef(null);
  const beepRef = useRef(null);

  const changeBreak = (amount) => {
    setBreakLength((prev) => {
      const newVal = Math.min(60, Math.max(1, prev + amount));
      if (!isRunning && !onSession) setTimeLeft(newVal * 60);
      return newVal;
    });
  };

  const changeSession = (amount) => {
    setSessionLength((prev) => {
      const newVal = Math.min(60, Math.max(1, prev + amount));
      if (!isRunning && onSession) setTimeLeft(newVal * 60);
      return newVal;
    });
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(1500);
    setIsRunning(false);
    setOnSession(true);
    if (beepRef.current) {
      beepRef.current.pause();
      beepRef.current.currentTime = 0;
    }
  };

  const startStop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 0) {
            beepRef.current.play();
            const next = onSession ? breakLength * 60 : sessionLength * 60;
            setOnSession(!onSession);
            return next;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div id="pomodoro-clock" className="clock-container">
      <Title />
      <div className="control-wrapper">
        <BreakControl breakLength={breakLength} changeBreak={changeBreak} />
        <SessionControl
          sessionLength={sessionLength}
          changeSession={changeSession}
        />
      </div>
      <TimerDisplay timeLeft={timeLeft} onSession={onSession} />
      <Controls
        isRunning={isRunning}
        startStop={startStop}
        reset={reset}
        beepRef={beepRef}
      />
    </div>
  );
}

export default App;
