export default function BreakControl({ breakLength, changeBreak }) {
  return (
    <div className="control-group">
      <div id="break-label">Break Length</div>
      <div className="control-row">
        <button id="break-decrement" onClick={() => changeBreak(-1)}>
          -
        </button>
        <div id="break-length">{breakLength}</div>
        <button id="break-increment" onClick={() => changeBreak(1)}>
          +
        </button>
      </div>
    </div>
  );
}
