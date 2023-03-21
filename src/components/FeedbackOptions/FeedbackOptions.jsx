import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            onLeaveFeedback(options.good);
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            onLeaveFeedback(options.neutral);
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            onLeaveFeedback(options.bad);
          }}
        >
          Bad
        </button>
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
