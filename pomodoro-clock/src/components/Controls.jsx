export default function Controls({ isRunning, startStop, reset, beepRef }) {
  return (
    <div className="button-controls">
      <button id="start-stop" onClick={startStop}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button id="reset" onClick={reset}>
        Reset
      </button>
      <audio
        id="beep"
        preload="auto"
        ref={beepRef}
        src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
      />
    </div>
  );
}
