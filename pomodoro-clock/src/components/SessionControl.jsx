export default function SessionControl({ sessionLength, changeSession }) {
  return (
    <div className="control-group">
      <div id="session-label">Session Length</div>
      <div className="control-row">
        <button id="session-decrement" onClick={() => changeSession(-1)}>
          -
        </button>
        <div id="session-length">{sessionLength}</div>
        <button id="session-increment" onClick={() => changeSession(1)}>
          +
        </button>
      </div>
    </div>
  );
}
