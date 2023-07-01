
export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
    <>
      <h2>Please leave feedback</h2>
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
)