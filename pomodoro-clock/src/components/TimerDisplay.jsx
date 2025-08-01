export default function TimerDisplay({ timeLeft, onSession }) {
  const formatTime = (time) => {
    const mins = String(Math.floor(time / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <>
      <div id="timer-label">{onSession ? "Session" : "Break"}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>
    </>
  );
}
