export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  
    // console.log(onLeaveFeedBack);

  return (
    <div className="btn-wrap">
      {Object.keys(options).map(option => (
        <button type="button" key={option} onClick={onLeaveFeedBack}>
          {option}
        </button>
      ))}
    </div>
  );
};
