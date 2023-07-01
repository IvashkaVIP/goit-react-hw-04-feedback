export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <>
    <div className="btn-wrap">
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  </>
);
