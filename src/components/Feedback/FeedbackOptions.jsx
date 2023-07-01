export const FeedbackOptions = ({ options, onLeaveFeedBack }) => (
  <div className="btn-wrap">
    {Object.keys(options).map(option => (
      <button
        type="button"
        key={option}
        onClick={evt => onLeaveFeedBack(evt, option)}
      >
        {option}
      </button>
    ))}
  </div>
);
