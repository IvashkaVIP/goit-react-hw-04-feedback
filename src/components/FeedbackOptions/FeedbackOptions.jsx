import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'




export const FeedbackOptions = ({ options, onLeaveFeedBack }) => (
  <div className={css['btn-wrap']}>
    {Object.keys(options).map(option => (
      <button
        className={css.btn}
        type="button"
        key={option}
        onClick={evt => onLeaveFeedBack(evt, option)}
      >
        {option}
      </button>
    ))}
  </div>
);




export const OldFeedbackOptions = ({ options, onLeaveFeedBack }) => (
  <div className={css['btn-wrap']}>
    {Object.keys(options).map(option => (
      <button
        className={css.btn}
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
