import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedBack: PropTypes.func.isRequired,
};
